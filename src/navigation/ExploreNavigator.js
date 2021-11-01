import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import SearcResultsScreen from '../screens/SearchResults';
import SearchResultsScreen from '../screens/SearchResults';
import styles from '../components/Post/styles';

const Stack = createStackNavigator();

const Router = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'Home'}
        component={HomeScreen}
        options={{
          headerShown: false,
          headerBackTitleVisible: true,
        }}
      />

      <Stack.Screen
        name={'Search Results'}
        component={SearchResultsScreen}
        options={{
          //   title: 'Search your destination',
          //   headerbacktitle: 'Welcome',
          headerBackTitleVisible: true,
        }}
      />
    </Stack.Navigator>
  );
};

export default Router;
