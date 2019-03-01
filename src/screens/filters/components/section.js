import React, { Component } from 'react';
import { TouchableHighlight, View } from 'react-native';
import { ListItem, Text, Left, Right, Icon, CheckBox, Body } from 'native-base';

import EventCheckBox from './check-box';

const test = [1, 2, 3];

export default class ListItemNoIndentExample extends Component {
  state = {
    isActive: false
  }

  sectionHandle = () => this.setState({isActive: !this.state.isActive})
  render() {
    const { isActive } = this.state;
    return (
        <View>
          <ListItem itemDivider onPress={() => this.sectionHandle()}>
            <Left>
              <Text>Mignolet</Text>
            </Left>
            <Right>
              {isActive ? <Icon name="arrow-down" /> : <Icon name="arrow-forward" />}
            </Right>
          </ListItem> 
          {isActive && test.map(item => (
          <EventCheckBox key={item}/>
          ))}   
        </View>
    );
  }
}