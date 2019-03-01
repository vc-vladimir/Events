import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Container, Header, Content, Button, Text } from 'native-base';

import { fetchFeed } from '../../api/api'
import { EventCard, SearchBar } from './components';

class Events extends Component {
  state = {
    events: [],
  }
  static navigationOptions = {
    header: null,
    };

  componentDidMount() {
    this.fetchEvents()
  }

  fetchEvents = async () => {
    const data = await fetchFeed();
    console.log(data);
    this.setState({ events: data });

  }
  render() {
    const { navigation } = this.props
    const { events } = this.state
    return (
      <View style={{flex: 1}}>
          <SearchBar navigation={navigation}/>
          <ScrollView>
            {events.map(item => (
            <EventCard i={1} key={item.id} event={item}/>

            ))}
          </ScrollView>
      </View>
    )
  }
}

export default Events;