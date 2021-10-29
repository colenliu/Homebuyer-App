import React, {useState} from 'react';
import {View, Text, TextInput, FlatList} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

import styles from './styles';

import destinations from '../../../assets/data/search';

/**
 * - input on top
 * - flat list of destinations
 * - render list of destinations
 */

const DestinationSearchScreen = props => {
  // need state to keep track of what's being typed and set text values to be used
  // (default value = empty string)
  const [inputText, setInputText] = useState('');

  return (
    // container styles contains everything
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where is your next dream home?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={destinations}
        renderItem={({item}) => (
          <View style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name={'location-pin'} size={30} color={'orange'} />
            </View>
            <Text styles={styles.destinationText}>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default DestinationSearchScreen;
