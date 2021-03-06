var React = require('react');
var AppActions = require('../actions/AppActions');
var AppStore = require('../stores/AppStore');
var AddForm = require('./AddForm');
var Workouts = require('./Workouts');

function getAppState() {
	return {
		showForm: AppStore.getShowForm(),
		workouts: AppStore.getWorkouts()
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
    console.log(this.state.workouts);
    const workouts = this.state.workouts || []
		if (this.state.showForm) {
			var form = <AddForm />;
		} else {
			var form = '';
		}
		return (
			<div>
				<h1 className="text-center page-header">Workout Logger</h1>
				<button onClick={this.onShowFormClick} className="btn btn-primary btn-block">Add Workout</button>
				<br />
				{form}
				<br />
				<Workouts workouts={workouts} />
			</div>
		);
	},

	// Update view state when change is received
	_onChange: function() {
		this.setState(getAppState());
	}
});

module.exports = App;
