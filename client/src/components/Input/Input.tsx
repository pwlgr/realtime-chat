import React from 'react';
import './Input.css';

interface IPRops {
	message: string;
	setMessage: (string) => void;
	sendMessage: (string) => void;
}

const Input: React.FC<IPRops> = ({ message, setMessage, sendMessage }) => {
	return (
		<form className="form">
			<input
				className="input"
				type="text"
				placeholder="Type a message..."
				value={message}
				onChange={(e: React.FormEvent<HTMLInputElement>) => setMessage(e.target.value)}
				onKeyPress={(e: React.FormEvent<HTMLInputElement>) => (e.key === 'Enter' ? sendMessage(e) : null)}
			/>
			<button className="sendButton" onClick={(e) => sendMessage(e)}>
				Send
			</button>
		</form>
	);
};

export default Input;
