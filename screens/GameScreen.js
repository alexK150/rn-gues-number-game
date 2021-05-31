import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const GameScreen = (props) => {
  return (
    <View style={styles.gameScreen}>
      <Text>The Game Screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  gameScreen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  }
})

export default GameScreen;
