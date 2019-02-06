import React, { Component } from 'react';
import ReactDOM from 'react-dom';

const GameList = ({
	gameLoop,
	gameTitle,
	spreadTitle,
	moneylineTitle,
	overunderTitle
}) => {
	return (
		<div id="nfl-section">
			<div className="games-section">
				<div className="title-headers">
					<div className="game-header">
						<h5>{gameTitle}</h5>
					</div>
					<div className="spread-header">
						<h5>{spreadTitle}</h5>
					</div>
					<div className="moneyline-header">
						<h5>{moneylineTitle}</h5>
					</div>
					<div className="overunder-header">
						<h5>{overunderTitle}</h5>
					</div>
				</div>
				{gameLoop()}
			</div>
		</div>
	);
};
export default GameList;
