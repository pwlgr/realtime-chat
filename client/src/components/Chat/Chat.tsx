import * as React from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';

let socket;

interface IProps {
	hash: string;
	key: string;
	pathname: string;
	search: string;
	state?: object;
}

const ENDPOINT = 'localhost:5000';

const Chat: React.FC<IProps> = ({ location }) => {
	const [ name, setName ] = React.useState<string>('');
	const [ room, setRoom ] = React.useState<string>('');
	const [ messages, setMessages ] = React.useState<string[]>([]);
	const [ message, setMessage ] = React.useState<string>('');

	React.useEffect(
		() => {
			const { room, name } = queryString.parse(location.search);

			socket = io(ENDPOINT);
			setName(name);
			setRoom(room);

			socket.emit('join', { name, room }, () => {});
			return () => {
				socket.emit('disconnect');
				socket.off();
			};
		},
		[ ENDPOINT, location.search ]
	);

	React.useEffect(
		() => {
			socket.on('message', (message: string) => {
				setMessages([ ...messages, message ]);
			});
		},
		[ messages ]
	);

	const sendMessage = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();

		if (message) {
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	};

	return (
		<div className="outerContainer">
			<div className="container">
				<InfoBar room={room} />
				<Input message={message} setMessage={setMessage} sendMessage={setMessage} />
			</div>
		</div>
	);
};

export default Chat;
