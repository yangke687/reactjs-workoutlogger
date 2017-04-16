var AppActions = require('../actions/AppActions');

module.exports = {
	addWorkout: function(workout) {
		//console.log('saving workout in localStorage');
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		if (!workouts) {
			workouts = [];
		}
		workouts.push(workout);
		localStorage.setItem('workouts', JSON.stringify(workouts));
	},
	getWorkouts: function() {
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		AppActions.receiveWorkouts(workouts);
	},
	removeWorkout: function(id) {
		var workouts = JSON.parse(localStorage.getItem('workouts'));
		for (var i = 0; i < workouts.length; i++) {
			if (workouts[i].id === id) {
				workouts.splice(i, 1);
				localStorage.setItem('workouts', JSON.stringify(workouts));
				break;
			}
		}
	}
}