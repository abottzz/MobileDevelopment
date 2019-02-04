import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '',valueUser: '',valueError: ''};

    this.onPress = this.onPress.bind(this);
    this.onChange = this.onChange.bind(this);

    var greeting;

  }
  onChange(event) {
    greeting = event;
  }

  validate() {
    let valueUser = '';
    let valueError = '';

    if (!greeting.match(/^[a-zA-Z]+$/)) {
        valueError='Name entered is not valid. Please try again!';
    }
    else if (greeting.match(/^[a-zA-Z]+$/)){
        valueUser="Thank you for using our site, " + greeting + "!";
    }
    if (valueError) {
        this.setState({valueError});
        return false;
    }
    else if (valueUser) {
        this.setState({valueUser});
        return false;
    }
    return true;
  }

  onPress() {
    this.validate();
    this.forceUpdate();
  }
  render() {
    if (this.state.valueUser) {
      return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
      <Text style={{color: "green", textAlign: "center", fontSize: 40}}>{this.state.valueUser}</Text>
      </View>
      );
    }
    else {
     return (
      <View style={styles.container} flexDirection="column" alignItems='stretch'>
        <View><TextInput style={styles.textInput} onChangeText={this.onChange} placeholder="Enter your name"></TextInput></View>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.onPress}><Text style={styles.buttonText}>Submit</Text></TouchableOpacity>
        <Text style={{color: "red", textAlign: "center", fontSize: 40}}>{this.state.valueError}</Text>
      </View>
      );
     }
  }
}

const styles = StyleSheet.create({
  buttonText:
  {
    color:"white",
    fontSize:40
  },
  buttonStyle:
  {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'blue',
    height:75,
    margin:30,
  },
  textInput:
  {
    margin:30,
    height:75,
    fontSize:20
  },
  defaultText:
  {
    fontSize:20
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
