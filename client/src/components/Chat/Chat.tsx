import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const ENDPOINT = 'localhost:5000';

const Chat: React.FC = ({ location }) => {
	const [ name, setName ] = useState<string>('');
	const [ room, setRoom ] = useState<string>('');

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
	return <div>Chat app</div>;
};

export default Chat;
