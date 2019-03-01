import React, { Component } from 'react';
import { View, DatePickerIOS, Modal, TouchableHighlight, TouchableWithoutFeedback } from 'react-native';
import { Container, Header, Content, DatePicker, Text } from 'native-base';

export default class EventDatePicker extends Component {

  state = {
    modalVisible: false,
    chosenDate: new Date(),
  };

  setModalVisible = (visible) => this.setState({modalVisible: visible});
  setDate = (newDate) => this.setState({chosenDate: newDate});
  

  render() {
    const { text } = this.props;
    return (
      <View style={{margin: 10 }}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <TouchableWithoutFeedback onPress={() => this.setModalVisible(false)}>
          <View style={{flex: 1, backgroundColor: '#3a393970', justifyContent: 'center'}}>
            <View style={{backgroundColor: '#ffffff', borderRadius: 10}}>
            <DatePickerIOS
              mode='date'
              locale={"en"}
              date={this.state.chosenDate}
              onDateChange={this.setDate}
            />
            </View>
          </View>
          </TouchableWithoutFeedback>
        </Modal>

        <TouchableWithoutFeedback  onPress={() => this.setModalVisible(true)}>
        <View style={{flexDirection: 'row'}}>
            <Text>{text}</Text>
            <Text>
                {this.state.chosenDate.toString().substr(4, 12)}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}