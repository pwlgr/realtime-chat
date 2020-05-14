import React, { useState } from 'react';
import './Join.css';

const Join: React.FC = (props) => {
	const [ room, setRoom ] = useState<string>('');
	const [ name, setName ] = useState<string>('');

	const goToRoom = (e) => {
		if (!name && !room) return null;
		e.preventDefault();
		props.history.push(`/chat?name=${name}&room=${room}`);
	};

	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Join</h1>
				<div>
					<input
						aria-label="nameInput"
						placeholder="Name"
						className="joinInput"
						type="text"
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<div>
					<input
						placeholder="Room"
						className="joinInput mt-20"
						type="text"
						onChange={(e) => setRoom(e.target.value)}
					/>
				</div>
				<button className={'button mt-20'} type="submit" onClick={(e) => goToRoom(e)}>
					Sign In
				</button>
			</div>
		</div>
	);
};

export default Join;
