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
    const {facets} = this.props;
    console.log(facets, 'facets')
    return (
      <List>
        <ScrollView>

          <EventDatePicker />
          {facets.map(item => (
            <Secation key={item.id} item={item}/>
          ))}
          
 
          <FromTo />
        </ScrollView>
      </List>
    );
  }
}