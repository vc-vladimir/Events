import React, { Component } from 'react';
import { View, Text } from 'react-native';
import EventDataPicker from './date-picker';

class FromTo extends Component {
  render() {
    return (
      <View style={{marginTop: 10}}>
        <View style={{backgroundColor: '#f9f9f9', justifyContent: 'space-around'}}>
          <EventDataPicker text={'From: '} />
          <EventDataPicker text={'To: '} />
        </View>
      </View>
    )
  }
}

export default FromTo;