import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';

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
	const [ name, setName ] = useState<string>('');
	const [ room, setRoom ] = useState<string>('');
	const [ messages, setMessages ] = useState<string[]>([]);
	const [ message, setMessage ] = useState<string>('');

	useEffect(
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

	useEffect(
		() => {
			socket.on('message', (message: string) => {
				setMessages([ ...messages, message ]);
			});
		},
		[ messages ]
	);

	const sendMessage = (e: React.ChangeEvent<HTMLInputElement>): void => {
		e.preventDefault();
		console.log('here');
		if (message) {
			socket.emit('sendMessage', message, () => setMessage(''));
		}
	};

	console.log(message, messages);

	return (
		<div className="outerContainer">
			<div className="container">
				<InfoBar room={room} />
				<Messages messages={messages} name={name} />
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
			</div>
		</div>
	);
};

export default Chat;
