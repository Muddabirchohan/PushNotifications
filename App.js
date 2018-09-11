import React, { Component } from 'react';
import { Platform, StyleSheet, Text, Button, View } from 'react-native';
var PushNotification = require('react-native-push-notification');
// import PushNotificationAndroid from 'react-native-push-notification';
// import DeviceEventEmitter from 'react-native-push-notification';

export default class App extends Component {

  componentDidMount() {
    PushNotification.localNotificationSchedule({
      message: 'new notification recieved ...',
      ticker: "My Notification Ticker",
      tag: 'some_tag',
      date: new Date("August 26, 2018 5:02:00"),
      repeatType: 'day',
      subText: "what would you like to do ?",
      color: 'blue',
      actions: '["Accept", "Reject"]'
    })
  }

  cancelNotification() {
    PushNotification.cancelAllLocalNotifications()
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>      A demo Site For Notifiers </Text>
        <Text style={styles.instructions}> A complete Notifier </Text>
        <Button style={{ paddingTop: '100px' }} title="cancel all" onPress={this.cancelNotification}> </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },

  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },

  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
