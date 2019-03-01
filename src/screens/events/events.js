import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

import { fetchFeed } from '../../api/api'
import { EventCard, SearchBar } from './components';

class Events extends Component {
  static navigationOptions = {
    header: null,
    };

  async componentDidMount() {
    
  }
  render() {
    const { navigation } = this.props
    return (
      <View style={{flex: 1}}>
          <SearchBar navigation={navigation}/>
          <ScrollView>
            <EventCard i={1} />
            <EventCard i={2}/>
            <EventCard i={3}/>
            <EventCard i={4}/>
          </ScrollView>
      </View>
    )
  }
}

export default Events;