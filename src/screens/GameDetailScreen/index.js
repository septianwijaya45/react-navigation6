import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const GameDetailScreen = ({navigation, route}) => {
  const {title, id} = route.params;
  return (
    <View style={styles.container}>
      <Text style={{color: '#000'}}>Game Datail Screen</Text>
      <Text style={{color: '#000'}}>{title}</Text>
    </View>
  );
};

export default GameDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
