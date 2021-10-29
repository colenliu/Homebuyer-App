/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import HomeScreen from './src/screens/Home';
import Post from './src/components/Post';

import feed from './assets/data/feed';

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];
const post4 = feed[3];

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Entype from 'react-native-vector-icons/Entypo';

const App: () => Node = () => {
  return (
    <SafeAreaView>
      {/* <HomeScreen /> */}
      <Post post={post1} />
      <Post post={post2} />
    </SafeAreaView>
  );
};

export default App;
