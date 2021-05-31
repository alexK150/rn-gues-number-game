import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={{color: 'white', fontWeight: 'bold'}}>{props.title.toUpperCase()}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 36,
    width: '100%',
    backgroundColor: '#487eb0',
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export default Header;
