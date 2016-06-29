var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

module.exports = function NinjaDescription(props){
  // Here's the route parameter (notice it's a string)
  var routeID = props.params.id
  // Let's pass it into the method our Route parent provided and assign the result to a variable
  var ninja = props.route.fetchTurtle(parseInt(routeID))
  setTimeout(function() { hashHistory.push('ninjas')}, 3000);

  return(
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.description}</p>
      // <Link to='/ninjas'>Back</Link>
    </div>
  )
}