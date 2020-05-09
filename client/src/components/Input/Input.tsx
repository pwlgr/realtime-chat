import React from 'react';
import './Input.css';

interface IProps {
	message: string;
	setMessage: (message: string) => void;
	sendMessage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.F<IProps> = ({ message, setMessage, sendMessage }) => {
	return (
		<form className="form">
			<input
				className="input"
				type="text"
				placeholder="Type a message..."
				value={message}
				onChange={(e) => setMessage(e.target.value)}
				onKeyPress={(e) => (e.key === 'Enter' ? sendMessage(e) : null)}
			/>
			<button className="sendButton" onClick={(e) => sendMessage(e)}>
				Send
			</button>
		</form>
	);
};

export default Input;
