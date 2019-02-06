'use strict';
const Wager = use('App/Models/Wager');
const Database = use('Database');

class ApiController {
	// users all wagers..pending,graded.
	async initialApp({ auth, request, response }) {
		try {
			const allWagers = await Wager.query()
				.where('user_id', '=', auth.user.id)
				.fetch();
			return {
				userInfo: auth.user
			};
		} catch (error) {}
	}

	// This is for the admin to check ALL PENDING WAGERS FOR ALL USERS
	async checkPendingWagers({ auth, request, response, view }) {
		if (auth.user.email == 'angel@gmail.com') {
			try {
				const allWagers = await Wager.query()
					.where({ wager_result: 'pending' })
					.fetch();
				console.log(allWagers);
				return {
					wagers: allWagers
				};
			} catch (error) {
				return response.redirect('/logout');
			}
		} else {
			return response.redirect('/logout');
		}
	}

	// users graded bets
	async graded({ auth, request, response, view }) {
		try {
			const allWagers = await Wager.query()
				.where({ user_id: auth.user.id, wager_result: 'graded' })
				.orderBy('id', 'desc')
				.fetch();
			return {
				wagers: allWagers
			};
		} catch (error) {
			console.log(error);
		}
	}
	// users pending bets
	async pending({ auth, response }) {
		try {
			const allWagers = await Wager.query()
				.where({ user_id: auth.user.id, wager_result: 'pending' })
				.orderBy('id', 'desc')
				.fetch();
			return {
				wagers: allWagers
			};
		} catch (error) {
			return response.redirect('/login');
			console.log(error);
		}
	}
}

module.exports = ApiController;
