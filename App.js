/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {GamingIcon} from './src/assets/Images';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import {LogBox} from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen
          name="Main"
          component={Main}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const Main = ({navigation}) => {
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
          navigation.navigate('Home');
        }}>
        <Text style={styles.textBegin}>Let's Begin</Text>
        <MaterialIcons name="arrow-forward-ios" size={22} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

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
    transform: [{rotate: '-20deg'}],
    marginBottom: 20,
  },
  begin: {
    backgroundColor: '#AD40AF',
    padding: 20,
    width: '90%',
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textBegin: {
    fontSize: 18,
    color: '#fff',
    fontFamily: 'Roboto-MediumItalic',
  },
});

export default App;
