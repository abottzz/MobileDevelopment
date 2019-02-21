import React from 'react';
import { Image, StyleSheet, Text, View, StatusBar, Button } from "react-native";
export default class Detail extends React.Component {
  static navigationOptions = {
  title: "Cats"
  };

const styles = StyleSheet.create({

container: {
alignItems: "center";
backgroundColor: "linear-gradient(to bottom, #33ccff 0%, #ff99cc 100%)";

},

import { MonoText } from '../assets/StyledText';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';

export default class Detail extends React.Component {
  static navigationOptions = {

header: null;
};

render() {
const {navigation} = this.props.navigation;

const otherParam = this.props.navigation.getParam('otherParam';)

}
