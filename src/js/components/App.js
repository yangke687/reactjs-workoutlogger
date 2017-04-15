var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');

function getAppState() {
	return {

	}
}

var App = React.createClass({
	getInitialState: function() {
		return getAppState();
	},

	componentDidMount: function() {
		AppStore.addChangeListener(this._onChange);
	},

	componentUnmount: function() {
		AppStore.removeChangeListener(this._onChange);
	},

	onShowFormClick: function(evt) {
		evt.preventDefault();
		AppActions.showForm();
	},

	render: function() {
		return (
			<div>
				<h1 className="text-center page-header">WorkoutLogger</h1>
				<button onClick={this.onShowFormClick} className="btn btn-primary btn-block">Add Workout</button>
				<br />
				FORM
				<br />
				WORKOUTS
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function() {
		this.setState(getAppState());
	}
});

module.exports = App;