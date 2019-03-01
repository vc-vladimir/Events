import React, { Component } from 'react';
import { Touch } from 'react-native';
import { Text, CheckBox, Body, ListItem } from 'native-base';

class EventCheckBox extends Component {
  state = {
    isActive: false,
  }
  toggleCheckbox = (name) => {
    this.setState({isActive: !this.state.isActive});
  }

  render() {
    const { isActive } = this.state;
    const { name } = this.props;
    return(

      <ListItem onPress={() => this.toggleCheckbox(name)}>
        <CheckBox checked={isActive} onPress={() => this.toggleCheckbox(name)} />
        <Body>
          <Text>{ name }</Text>
        </Body>
      </ListItem>
    )
  }
}

EventCheckBox.defaultProps = {
  name: 'Daily Stand Up'
}

export default EventCheckBox;