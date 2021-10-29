import React from 'react';
// FlatList allows us to render flat list with multpile items
import {View, Text, FlatList} from 'react-native';

import feed from '../../../assets/data/feed';
import Post from '../../components/Post';

import styles from './styles';

/**
 * renderItem does action to each item in array
 */

const SearchResultsScreen = props => {
  const post = props.post;

  return (
    <View>
      <FlatList data={feed} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResultsScreen;
