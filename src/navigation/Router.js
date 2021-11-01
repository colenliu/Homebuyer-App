import React from 'react';
// create stack navigator component
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
// all our application/routes should be inside navigation container, handles logic of navigation
import {NavigationContainer} from '@react-navigation/native';

import SearchResultsScreen from '../screens/SearchResults';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestScreen from '../screens/Guests';

import HomeTabNavigator from './HomeTabNavigator';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{
            headerShown: false,
            headerBackTitleVisible: true,
          }}
        />

        <Stack.Screen
          name={'Destination Search'}
          component={DestinationSearchScreen}
          options={{
            title: 'Find your Destination',
            // headerBackTitleVisible: true,
          }}
        />

        <Stack.Screen
          name={'Guests Screen'}
          component={GuestScreen}
          options={{
            title: 'Specify your Preferences',
          }}
        />

        <Stack.Screen
          name={'Search Results'}
          component={SearchResultsScreen}
          options={{
            title: "What we've found",
            headerBackTitleVisible: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
