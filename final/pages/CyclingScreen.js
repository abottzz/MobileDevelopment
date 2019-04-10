import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
export default class CyclingScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ marginTop: 10, fontSize: 25 }}>Cycling</Text>
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
<TouchableOpacity
            style={styles.app}
            onPress={() => this.props.navigation.navigate('')}>
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