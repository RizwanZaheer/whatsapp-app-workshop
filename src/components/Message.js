import React from 'react';
import { View, StyleSheet, Text } from 'react-native'
import * as Animatable from 'react-native-animatable';

const Message = ({ item, userId }) => {
const incoming = item.userId !== userId
 return (
   <Animatable.View 
      duration={100}
      animation={incoming ? "slideInLeft" : "slideInRight" } style={[
        styles.message, incoming &&
        styles.incomingMessage
      ]}>
      <Text>{item.message}</Text>
    </Animatable.View>
 )
}

const styles = {
  message: {
    width: '70%',
    margin: 10,
    padding: 10,
    backgroundColor: 'white',
    borderColor: '#979797',
    borderStyle: 'solid',
    borderWidth: 1,
    alignSelf: 'flex-end',
    backgroundColor: '#E1FFC7',
    borderRadius: 10
  },
  incomingMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF'
  } 
}

export default Message;