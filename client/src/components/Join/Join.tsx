import * as React from 'react';
import { Link } from 'react-router-dom';
import './Join.css';

const Join: React.FC = () => {
	const [ room, setRoom ] = React.useState<string>('');
	const [ name, setName ] = React.useState<string>('');
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
						onChange={(e: React.FormEvent<HTMLInputElement>) => setRoom(e.target.value)}
					/>
				</div>
				<Link
					onClick={(e: React.FormEvent<HTMLInputElement>) => (!name || !room ? e.preventDefault() : null)}
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
