import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {windowWidth} from '../../utils/dimension';

const ListItem = ({photo, title, subtitle, isFree, price, onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageView}>
        <Image source={photo} style={styles.image} />
        <View style={{width: windowWidth - 220}}>
          <Text style={styles.type}>{title}</Text>
          <Text numberOfLines={1} style={styles.title}>
            {subtitle}
          </Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.textButton}>
          {isFree == 'Yes' && 'Play'}
          {isFree == 'No' && price}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  imageView: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: 55,
    height: 55,
    borderRadius: 10,
    marginRight: 8,
  },
  type: {
    color: '#333',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
  title: {
    color: '#333',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
    textTransform: 'uppercase',
  },
  button: {
    backgroundColor: '#0aaad8',
    padding: 10,
    width: 100,
    borderRadius: 10,
  },
  textButton: {
    color: '#fff',
    textAlign: 'center',
    fontFamily: 'Roboto-Medium',
    fontSize: 14,
  },
});
