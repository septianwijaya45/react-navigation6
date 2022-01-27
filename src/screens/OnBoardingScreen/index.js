import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GamingIcon} from '../../assets/Images/';

const OnBoardingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.textTitle}>GAMEON</Text>
      </View>
      <View style={styles.gamingSection}>
        <GamingIcon width={300} height={300} style={styles.gamingIcon} />
      </View>
      <TouchableOpacity
        style={styles.begin}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={styles.textBegin}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={20} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 50,
  },
  textTitle: {
    fontSize: 30,
    color: '#20315f',
    fontFamily: 'Inter-Bold',
  },
  gamingSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  gamingIcon: {
    transform: [{rotate: '-30deg'}],
    marginBottom: 20,
  },
  begin: {
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBegin: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto-MediumItalic',
  },
});
