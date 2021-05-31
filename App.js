import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header';
import GameScreen from './screens/GameScreen';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <Header title='Guess Game'/>
      <GameScreen/>
    </View>
  );
}
