import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  Pressable,
  TouchableOpacity,
  TouchableNativeFeedback,
} from 'react-native';

import Fontisto from 'react-native-vector-icons/Fontisto';

import styles from './styles';

/**
 * COMPONENTS TO BUILD:
 * - search button
 * - background image
 * - page tile
 * - explore button
 */

const HomeScreen = props => {
  return (
    <View>
      <ImageBackground
        source={require('../../../assets/images/venetian.jpg')}
        style={styles.image}>
        <Text style={styles.title}>Find your Dream Home</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn('EXPLORE BUTTON PRESSED')}>
          <Text style={styles.buttonText}>Show homes in your area</Text>
        </Pressable>
      </ImageBackground>
      <Pressable
        style={styles.searchBar}
        onPress={() => console.warn('SEARCH BUTTON PRESSED')}>
        <Fontisto name="search" size={25} color={'#f15454'} />
        <Text style={styles.searchBarText}> Where do you want to live?</Text>
      </Pressable>
    </View>
  );
};


export default HomeScreen