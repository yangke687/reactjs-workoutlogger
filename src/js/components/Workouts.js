var React = require('react');
var Workout = require('./Workout');

var Workouts = React.createClass({
	render: function() {
		return (<div>
			<ul className="list-group">
				{ 
					this.props.workouts.map(function(workout,idx){
						return (
							<Workout workout={workout} key={idx} />
						)
					})
				}
			</ul>
		</div>);
	}
});

module.exports = Workouts;