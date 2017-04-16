var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
	showForm: function() {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.SHOW_FORM
		});
	},
	addWorkout: function(workout) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_WORKOUT,
			workout: workout
		});
	},
	receiveWorkouts: function(workouts) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.RECV_WORKOUTS,
			workouts: workouts
		});
	},
	removeWorkout: function(id) {
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_WORKOUT,
			id: id
		});
	}
}

module.exports = AppActions;