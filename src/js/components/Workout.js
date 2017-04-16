var React = require('react');

var Workout = React.createClass({
	render: function() {
		if (this.props.workout.miles) {
			var miles = ' ' + this.props.workout.miles + ' Miles';
		} else {
			var miles = '';
		}
		return (
			<li className="list-group-item">
				<strong>{this.props.workout.type}</strong> 
				<div className="pull-right">
					<span className="label label-default" style={{marginRight:"10px"}}>{this.props.workout.minutes} Minutes</span>
					<span className="label label-default">{miles}</span>
				</div>
			</li>
		);
	}
});

module.exports = Workout;