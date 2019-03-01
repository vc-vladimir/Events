import React, { Component } from 'react';
import { Image } from 'react-native';
import moment from 'moment';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, Title } from 'native-base';
export default class EventCard extends Component {
  state = {
    date: '',
  }

  componentDidMount() {
    this.getDate()
  }
  getDate = () => {
    const {event} = this.props;
    const formatDate = moment(event.date, 'YYYY-MM-DD HH:mm:ss');
    this.setState({ date: formatDate.format('DD.MMM') });
  };

  render() {
    const {i, event } = this.props;
    const {date} = this.state
    return (
          <Card>
          <CardItem>
              <Left>
                <Thumbnail source={{uri: `${'https://picsum.photos/70'}${i}`}} />
                <Body>
                  <Text style={{fontWeight: 'bold'}}>{event.title}</Text>
                  <Text note>{event.organization}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: `${'https://picsum.photos/70'}${i}`}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="clockcircle" type='AntDesign' />
                  <Text>{date}</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>4 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>{event.category}</Text>
              </Right>
            </CardItem>
          </Card>
    );
  }
}