var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

// This file holds our JSON array of turtles
var data = require('./data.json');
var NinjaComponent = require('./ninjacomponent.js');
var NinjaDescription = require('./ninjadescription.js');

var App = React.createClass({
  fetchTurtle: function(id) {
    // Filter the array of turtles by the id and return the first element of the resulting array
    return this.props.data.filter(function(ninja){
      return (ninja.id === id)
    })[0]
  },  
  render: function(){
    console.log('in App render: ', this.props.data);
    var IndexRoute = ReactRouter.IndexRoute;
    return (

      <Router history={hashHistory}>
        <Route path='/ninjas'>
          <IndexRoute component={NinjaComponent} data={this.props.data}/>
          <Route path=':id' component={NinjaDescription} fetchTurtle={this.fetchTurtle}/>
        </Route>
      </Router>
    )
  }
});

ReactDOM.render(<App data={data}/>, document.getElementById('app'))
