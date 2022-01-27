import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import {MenuImage, ProfileImage} from '../../assets/Images';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CustomDrawer = props => {
  return (
    <View style={styles.container}>
      <DrawerContentScrollView contentContainerStyle={styles.drawer}>
        <ImageBackground source={MenuImage} style={styles.imgBackground}>
          <Image source={ProfileImage} style={styles.imgProfile} />
          <Text style={styles.name}>Septian Wijaya</Text>
          <View style={styles.amount}>
            <Text style={styles.balance}>Rp 50.000,-</Text>
            <FontAwesome5 name="coins" size={14} color="#fff" />
          </View>
        </ImageBackground>
        <View style={styles.menulist}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.menulistbutton}>
        <TouchableOpacity style={styles.tellFriends}>
          <View style={styles.tellFriendsContainer}>
            <Ionicons name="share-social-outline" size={22} color="#000" />
            <Text style={styles.textTellFriends}>Tell a Friends</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tellFriends}>
          <View style={styles.tellFriendsContainer}>
            <Ionicons name="exit-outline" size={22} color="#000" />
            <Text style={styles.textTellFriends}>Sign Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawer: {
    backgroundColor: '#8200d6',
  },
  imgBackground: {
    padding: 20,
  },
  imgProfile: {
    height: 80,
    width: 80,
    borderRadius: 80 / 2,
    marginBottom: 10,
  },
  name: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Roboto-Medium',
    marginBottom: 5,
  },
  amount: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  balance: {
    color: '#fff',
    fontFamily: 'Roboto-Regular',
    marginRight: 10,
  },
  menulist: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 10,
  },
  menulistbutton: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  tellFriends: {
    paddingVertical: 15,
  },
  tellFriendsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textTellFriends: {
    fontSize: 15,
    fontFamily: 'Roboto-Medium',
    marginLeft: 5,
    color: '#000',
  },
});
