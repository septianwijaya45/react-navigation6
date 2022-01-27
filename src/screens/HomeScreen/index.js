import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';

import Feather from 'react-native-vector-icons/Feather';
import {freeGames, paidGames, sliderData} from '../../model/data';
import Carousel from 'react-native-snap-carousel';
import BannerSlider from '../../components/BannerSlider';
import {windowHeight, windowWidth} from '../../utils/dimension';
import CustomSwitch from '../../components/CustomSwitch';
import ListItem from '../../components/ListItem';
import {ProfileImage} from '../../assets/Images';

const HomeScreen = ({navigation}) => {
  const [gamesTab, setGamesTab] = useState(1);
  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };
  return (
    <SafeAreaView>
      <View style={{height: windowHeight}}>
        <View style={styles.header}>
          <Text style={styles.textHello}>Hello Septian!</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={ProfileImage} style={styles.imageProfile} />
          </TouchableOpacity>
        </View>
        <ScrollView style={styles.scrollview}>
          <View style={styles.searchView}>
            <Feather
              name="search"
              size={20}
              color="#C6C6C6"
              style={styles.iconInput}
            />
            <TextInput
              placeholder="Search"
              style={styles.inputSearch}
              placeholderTextColor={'#000'}
            />
          </View>

          <View style={styles.upcomingView}>
            <Text style={styles.upcomingText}>Upcoming Games</Text>
            <TouchableOpacity>
              <Text style={{color: '#0aada8'}}>See all</Text>
            </TouchableOpacity>
          </View>

          <Carousel
            ref={c => {
              this._carousel = c;
            }}
            data={sliderData}
            renderItem={renderBanner}
            sliderWidth={windowWidth - 40}
            itemWidth={300}
            loop={true}
            autoplay={true}
          />

          <View style={{marginVertical: 20}}>
            <CustomSwitch
              selectionMode={1}
              option1="Free to Play"
              option2="Paid Game"
              onSelectSwitch={onSelectSwitch}
            />
          </View>

          <View style={{marginBottom: 10}}>
            {gamesTab == 1 &&
              freeGames.map(item => (
                <ListItem
                  key={item.id}
                  data={item}
                  photo={item.poster}
                  title={item.title}
                  subtitle={item.subtitle}
                  isFree={item.isFree}
                  price={item.price}
                />
              ))}
            {gamesTab == 2 &&
              paidGames.map(item => (
                <ListItem
                  key={item.id}
                  data={item}
                  photo={item.poster}
                  title={item.title}
                  subtitle={item.subtitle}
                  isFree={item.isFree}
                  price={item.price}
                />
              ))}
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  scrollview: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginVertical: 10,
  },
  textHello: {
    fontSize: 16,
    color: '#000',
    fontFamily: 'Roboto-Medium',
  },
  imageProfile: {
    width: 30,
    height: 30,
    borderRadius: 25,
  },
  searchView: {
    flexDirection: 'row',
    borderColor: '#C6C6C6',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  iconInput: {
    marginRight: 5,
    justifyContent: 'center',
  },
  inputSearch: {
    height: 40,
    color: '#000',
  },
  upcomingView: {
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  upcomingText: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'Roboto-Medium',
  },
});
