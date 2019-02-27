import React, { Component } from 'react';
import { View } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

import { EventCard, SearchBar } from './components';

class Events extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
          <SearchBar />
          <EventCard />
      </View>
    )
  }
}

export default Events;