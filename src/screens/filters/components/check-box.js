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
    const { title } = this.props;
    return(

      <ListItem onPress={() => this.toggleCheckbox(title)}>
        <CheckBox checked={isActive} onPress={() => this.toggleCheckbox(title)} />
        <Body>
          <Text>{ title }</Text>
        </Body>
      </ListItem>
    )
  }
}

EventCheckBox.defaultProps = {
  title: 'Daily Stand Up'
}

export default EventCheckBox;