var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _workouts = [];
var _showForm = false;

var AppStore = assign({}, EventEmitter.prototype, {
	emitChange: function() {
		this.emit(CHANGE_EVENT);
	},
	addChangeListener: function(callback) {
		this.on('change', callback);
	},
	removeChangeListener: function(callback) {
		this.removeListener('change', callback);
	},
	getShowForm() {
		return _showForm;
	},
	showForm() {
		//console.log('show form true');
		_showForm = true;
	},
	getWorkouts: function() {
		return _workouts;
	},
	addWorkout(workout) {
		_workouts.push(workout);
	}
});

AppDispatcher.register(function(payload) {
	var action = payload.action;

	switch (action.actionType) {
		case AppConstants.SHOW_FORM:
			AppStore.showForm();
			// emit
			AppStore.emit(CHANGE_EVENT);
			break;
		case AppConstants.ADD_WORKOUT:
			AppStore.addWorkout(action.workout);
			// api 
			AppAPI.addWorkout(action.workout);
			// emit
			AppStore.emit(CHANGE_EVENT);
			break;
	}

	return true;
});

module.exports = AppStore;