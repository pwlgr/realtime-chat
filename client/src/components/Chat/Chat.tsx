import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

let socket;

const Chat: React.FC = ({ location }) => {
	const [ name, setName ] = useState<string>('');
	const [ room, setRoom ] = useState<string>('');

	useEffect(() => {
		const { data, name } = queryString.parse(location.search);

		socket = io('localhost:5000');

		setName(name);
		setRoom(room);
	});
	return <div>Chat app</div>;
};

export default Chat;
