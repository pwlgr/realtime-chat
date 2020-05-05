import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join: React.FC = () => {
	const [ name, setName ] = useState<string>('');
	const [ room, setRoom ] = useState<string>('');
	return (
		<div className="joinOuterContainer">
			<div className="joinInnerContainer">
				<h1 className="heading">Join</h1>
				<div>
					<input
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
				<Link
					onClick={(e) => (!name || !room ? e.preventDefault() : null)}
					to={`/chat?name=${name}&room=${room}`}
				>
					<button className={'button mt-20'} type="submit">
						Sign In
					</button>
				</Link>
			</div>
		</div>
	);
};

export default Join;
