import React from 'react';
// create bottom tab navigator
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import HomeScreen from '../screens/Home';
import SearchResultScreen from '../screens/SearchResults';

import ExploreNavigator from './ExploreNavigator';

const bottomTab = createBottomTabNavigator();

const HomeTabNavigator = props => {
  return (
    <bottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'orange',
        tabBarStyle: [
          {
            display: 'flex',
          },
          null,
        ],
      }}>
      <bottomTab.Screen
        name={'Explore'}
        component={ExploreNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="search" size={25} color={color} />
          ),
        }}
      />
      <bottomTab.Screen
        name={'Saved'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="heart-o" size={25} color={color} />
          ),
        }}
      />
      <bottomTab.Screen
        name={'Homes'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="airbnb" size={25} color={color} />
          ),
        }}
      />
      <bottomTab.Screen
        name={'Messages'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Feather name="message-square" size={25} color={color} />
          ),
        }}
      />
      <bottomTab.Screen
        name={'User'}
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="intersex" size={25} color={color} />
          ),
        }}
      />
    </bottomTab.Navigator>
  );
};

export default HomeTabNavigator;
