import React from 'react';

interface User {
	id: string;
	room: string;
	name: string;
}

interface IProps {
	users: User[];
}

const ActiveUsers: React.FC<IProps> = ({ users }) => {
	return <div>Active users: {users.map((e: User) => <p key={e.id}>{e.name}</p>)}</div>;
};

export default ActiveUsers;
