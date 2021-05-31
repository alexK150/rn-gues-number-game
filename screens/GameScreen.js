import React from 'react';
import {Text, View, StyleSheet, TextInput, Button} from 'react-native';

const GameScreen = (props) => {
  return (
    <View style={styles.gameScreen}>
      <Text style={{padding: 5}}>The Game Screen</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.title}>Select a number</Text>
        <TextInput/>
        <View style={styles.buttonsContainer}>
          <Button title='Reset' onPress={()=>{}}/>
          <Button title='Confirm' onPress={()=>{}}/>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginVertical: 10
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.26,
    shadowRadius: 6,
    backgroundColor: 'white',
    elevation: 5,
    padding: 10,
    borderRadius: 10
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around'
  }
})

export default GameScreen;
