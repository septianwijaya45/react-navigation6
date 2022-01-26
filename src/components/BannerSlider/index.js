import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const BannerSlider = ({data}) => {
  return (
    <View>
      <Image source={data.image} style={styles.image} />
    </View>
  );
};

export default BannerSlider;

const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 300,
    borderRadius: 10,
  },
});
