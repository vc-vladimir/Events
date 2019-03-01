import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { List,  Item, Input, Icon  } from 'native-base';

import Secation from './section';
import EventSearch from './event-search';
import EventDatePicker from './date-picker';
import FromTo from './from-to';

export default class ListItem extends Component {
  state = {
    eventName: '',
    date: '',
    facets: [],
  }

  render() {
    return (
      <List>
        <ScrollView>
          <EventSearch />
          <EventDatePicker />
          <Secation />
          <Secation />
          <Secation />
          <Secation />
          <Secation />
          <Secation />
          <FromTo />
        </ScrollView>
      </List>
    );
  }
}