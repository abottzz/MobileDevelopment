import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 30, fontSize: 23 }}>Please select your workout</Text>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Power')}>
            <Text style={{fontSize: 23 }}>Power Lifting</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Cardio')}>
            <Text style={{fontSize: 23 }}>Cardio</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Yoga')}>
            <Text style={{fontSize: 23 }}>Yoga</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Rowing')}>
            <Text style={{fontSize: 23 }}>Rowing</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Cycling')}>
            <Text style={{fontSize: 23 }}>Cycling</Text>
          </TouchableOpacity>
          
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#ffa035',
    padding: 30,
    width: 300,
    marginTop: 20,
  },

});