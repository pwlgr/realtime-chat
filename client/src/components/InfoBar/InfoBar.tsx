import React from 'react';
import './InfoBar.css';

interface IProps {
	room: string;
}

const InfoBar: React.FC<IProps> = ({ room }) => (
	<div className="infoBar">
		<div className="leftInnerContainer">
			Onlice Icon
			<h3>{room}</h3>
		</div>
		<div className="rightInnerContainer">
			<a href="/">Close Icon</a>
		</div>
	</div>
);

export default InfoBar;
