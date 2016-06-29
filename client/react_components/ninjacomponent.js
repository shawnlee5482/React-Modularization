var React = require('react')
var ReactDOM = require('react-dom')
var ReactRouter = require('react-router');
var Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    hashHistory = ReactRouter.hashHistory;
var Link = ReactRouter.Link;

var NinjaList = require('./ninjalist.js'); 

module.exports = React.createClass({
    render: function (){
    console.log('in NinjaComponent render: ', this.props.route.data);      
        return (
          <div>
            <h1>Greetings Ninja!</h1>
            <h2>Click on a ninja for more information</h2>
            <NinjaList turtles={this.props.route.data}/>
            {this.props.children}            
          </div>
        )
    }
});