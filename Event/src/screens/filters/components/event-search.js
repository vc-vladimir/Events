import React, { Component } from 'react';
import { Item, Input } from 'native-base';

class EventSearch extends Component {
  state = {
    eventName: ''
  }

  inputHandle = (name) => this.setState({ eventName: name});

  render() {
    return (
      <Item style={{ 
        margin: 10,
        marginLeft: 10,
        paddingLeft: 10,
        borderRadius: 10, 
        borderWidth: 1,  
        backgroundColor: '#dcdada', 
        borderBottomColor: '#fff',
        borderColor: '#999' }}>
        <Input
          style={{borderBottomColor: '#fff'}}
          placeholder='Event name' 
          onChangeText={(text) => this.inputHandle(text)} />
      </Item>
    )
  }
}

export default EventSearch;