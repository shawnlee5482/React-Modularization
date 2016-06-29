var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

module.exports = React.createClass({
  render: function(){
    console.log('this.props.turtles: ', this.props.turtles);
    var ninjas = this.props.turtles.map(function(turtle, idx){
      return (
        <li key={idx}>
          <Link to={'ninjas/' + turtle.id}>{turtle.name}</Link>
        </li>        
        // <li key={idx}>
        //   <a href="#">{turtle.name}</a>
        // </li>
      )
    })
    return (
      <ul>
        {ninjas}
      </ul>
    )
  }
});