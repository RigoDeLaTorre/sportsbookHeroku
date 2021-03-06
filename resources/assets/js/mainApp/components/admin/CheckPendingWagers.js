import React, { Component } from 'react';
import axios from 'axios';

export default class CheckPendingWagers extends Component {
	constructor() {
		super();
		this.state = {
			dropdown: false
		};
	}
	componentWillMount() {
		const self = this;
		const getInitialData = async function() {
			try {
				const initialData = await axios.get('/api/checkPendingWagers');

				self.setState({
					wagers: initialData.data.wagers
				});
			} catch (error) {
				// console.log(error)
			}
		};

		getInitialData();
	}

	showLatestWagers = () => {
		if (this.state.wagers) {
			return this.state.wagers.map((item, index) => {
				let ticket = item.id;
				let user = item.user_id;
				let details = item.wager_details;
				let juice = item.wager_juice;
				let line = item.wager_line;
				let matchTime = item.wager_matchTime;
				let result = item.wager_result;
				let risk = item.wager_risk;
				let teamChosen = item.wager_teamChosen;
				let wagerType = item.wager_type;
				let win = item.wager_win;
				return (
					<div className="account-container" key={index}>
						<table>
							<tbody>
								<tr>
									<th className="wager-headers wager-ticket">User</th>
									<th className="wager-headers wager-ticket">Ticket</th>
									<th className="wager-headers wager-game">Game</th>
									<th className="wager-headers">Game Date</th>
									<th className="wager-headers">Bet</th>
									<th className="wager-headers ">Type</th>
									<th className="wager-headers">Line</th>
									<th className="wager-headers ">Juice</th>
									<th className="wager-headers">Risk</th>
									<th className="wager-headers">Win</th>
									<th className="wager-headers">Status</th>
								</tr>
								<tr>
									<td>#{user}</td>
									<td>#{ticket}</td>
									<td className="wager-game">{details}</td>
									<td>{matchTime}</td>
									<td>{teamChosen}</td>
									<td>{wagerType}</td>
									<td>{line}</td>
									<td>{juice}</td>
									<td>${risk}</td>
									<td>${win}</td>
									<td className={result == 'pending' ? 'pending' : 'graded'}>
										{result}
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				);
			});
		} else {
			return (
				<div>
					{' '}
					<a href="/login">Please re-login</a>
				</div>
			);
		}
	};
	render() {
		return <section id="account">{this.showLatestWagers()}</section>;
	}
}
