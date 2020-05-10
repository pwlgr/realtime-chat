import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import './Chat.css';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import Messages from '../Messages/Messages';
import ActiveUsers from '../ActiveUsers/ActiveUsers';

let socket;

interface User {
	id: string;
	room: string;
	name: string;
}

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
	const [ users, setUsers ] = useState<User[]>([]);

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
			socket.on('roomData', ({ users }) => {
				setUsers(users);
			});
			socket.on('message', (message: string) => {
				setMessages([ ...messages, message ]);
			});
		},
		[ messages, users ]
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
				<Messages messages={messages} name={name} />
				<Input message={message} setMessage={setMessage} sendMessage={sendMessage} />
				<ActiveUsers users={users} />
			</div>
		</div>
	);
};

export default Chat;
