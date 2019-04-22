import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Linking } from 'react-native';
export default class PowerScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginTop: 10, fontSize: 25 }}>Power Lifting</Text>
      <Text style={{ marginTop: 10, fontSize: 19 }}>Week of 4-8-19</Text>
      <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text
            style={styles.song}
            >
            <Text style= {{ textAlign: 'center', fontWeight: 'bold' }}>Song</Text>
          </Text>
          <Text style={{ marginTop: 15, fontSize: 21 }}>Open with...</Text>
          <TouchableOpacity onPress={() => Linking.openURL('Spotify://app')}
            style={styles.app}
            >
            <Text style={{fontSize: 23 }}>Spotify</Text>
          </TouchableOpacity>
        </View>
        

      </View>
    );
  }
}
const styles = StyleSheet.create({
  song: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 200,
    marginTop: 5,
  },

  app : {
    alignItems: 'center',
    backgroundColor: '#42f445',
    padding: 2,
    width: 300,
    marginTop: 2,
  },

});