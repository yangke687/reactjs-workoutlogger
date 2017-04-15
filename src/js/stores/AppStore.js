var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var AppAPI = require('../utils/AppAPI.js');

var CHANGE_EVENT = 'change';

var _items = [];
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
	}

	return true;
});

module.exports = AppStore;