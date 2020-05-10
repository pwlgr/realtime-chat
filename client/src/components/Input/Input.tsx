import React from 'react';
import './Input.css';

interface IProps {
	message: string;
	setMessage: (message: string) => void;
	sendMessage: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IProps> = ({ message, setMessage, sendMessage }) => {
	return (
		<form className="form">
			<input
				aria-label="messageInput"
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
