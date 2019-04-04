import React, { Component } from 'react';
import { Text } from "react-native";
	class Clock extends React.Component {
	  constructor(props) {
	    super(props);
    this.state =  {
	      time: new Date().toLocaleTimeString()
	};
       }
       componentDidMount() {
	this.intervalID = setInterval(
	   () => this.interval(),
	   1000
	);
      }
      componentWillUnmount() {
	clearInterval(this.intervalID);
	}
	interval() {
	  this.setState({
	   time: new Date().toLocaleTimeString()
	});
         }
         render() {
	 return  (
		<Text>
		   {this.state.time}
		</Text>
	      );
	}
  }

export default Clock;
