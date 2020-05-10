import React from 'react';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message/Message';

import './Messages.css';

interface IProps {
	messages: [];
	name: string;
}

const Messages: React.FC<IProps> = ({ messages, name }) => (
	<ScrollToBottom className="messages">
		{messages.map((message, i) => (
			<div key={i}>
				<Message message={message} name={name} />
			</div>
		))}
	</ScrollToBottom>
);

export default Messages;
