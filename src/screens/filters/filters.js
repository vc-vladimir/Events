import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ItemList } from './components'

import { fetchFacets } from '../../api/api';

class Filters extends Component {

  componentWillUnmount() {}

  componentDidMount() {
    fetchFacets()
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <ItemList />
      </View>
    )
  }
}

export default Filters;