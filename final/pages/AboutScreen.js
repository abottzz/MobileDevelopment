import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
export default class SettingsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 50, fontSize: 25 }}>Welcome to iFitMusic!</Text>
                <Text style={ styles.bio}>We are commited to providing users with the most diverse and fresh music selections for all of your workouts! Simply select the workout you are planning on doing, and a playlist filled with the best songs for that workout appear. These playlists are updated on a weekly basis, so you're always getting the latest tunes. </Text>

        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Home')}>
            <Text>Reuturn Home</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    width: 300,
    marginTop: 16,
  },
  bio: {
    alignItems: 'center',
    backgroundColor: '#ffa035',
    padding: 10,
    width: 300,
    marginTop: 60,
    fontSize: 18
  },
});
