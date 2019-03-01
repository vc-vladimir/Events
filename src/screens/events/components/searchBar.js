import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text } from 'native-base';
export default class SearchBar extends Component {
  render() {
    const { navigation } = this.props;
    return (
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
            <Icon name="ios-people" />
          </Item>
          <Button transparent onPress={() => navigation.navigate('Filters')}>
            <Icon name='profile' type='AntDesign' size={24}/>
          </Button>
        </Header>
    );
  }
}