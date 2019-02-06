'use strict';
const Wager = use('App/Models/Wager');

class WagerController {
	// Stores new wagers
	async store({ auth, request, response }) {
		const data = request.post();
		const data2 = data.wagers;

		try {
			const newWager = await Wager.createMany(data2);
			return 1;
		} catch {
			return 0;
		}
	}
}

module.exports = WagerController;
