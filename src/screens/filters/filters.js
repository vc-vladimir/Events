import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { ItemList } from './components'

import { fetchFacets } from '../../api/api';

class Filters extends Component {
  state = {
    facets: [],
  }
  componentWillUnmount() {}

  componentDidMount() {
    this.fetchFilterOptions();
  }
  fetchFilterOptions = async () => {
   const data =  await fetchFacets();
   console.log(data, 'data')
   this.setState({facets: data.facets})
   
  }
  render() {
    const { facets } = this.state
    console.log(facets, 'ok')
    return (
      <View style={{flex: 1}}>
        <ItemList facets={facets}/>
      </View>
    )
  }
}

export default Filters;