import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/core';

import styles from './styles';

// change guest screen into filter for apartments
// (how many price, noise level, accessibility, location, rooms, appliances included, etc.)

/**
 * - each row is a filter (e.g. adult, children, infants for now)
 * - each row has left: text + right: button
 * - make one line, copy and paste to make next line(s)
 * - state variable keeps track of counter
 */

const GuestScreen = props => {
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();

  return (
    <View style={styles.topContainer}>
      <View>
        <View style={styles.row}>
          {/** row 1 Adults text */}
          <View>
            <Text style={styles.adult}>Bedrooms</Text>
            <Text style={styles.adultAge}>Recommended: 3 to 5</Text>
          </View>
          {/** row 1 Adults buttons */}
          <View style={styles.adultButtons}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>
            <Text style={styles.counterText}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          {/** row 1 Children text */}
          <View>
            <Text style={styles.adult}>Floors</Text>
            <Text style={styles.adultAge}>Recommended: 1 to 3</Text>
          </View>
          {/** row 1 Children buttons */}
          <View style={styles.adultButtons}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>
            <Text style={styles.counterText}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          {/** row 1 Infants text */}
          <View>
            <Text style={styles.adult}>Washrooms</Text>
            <Text style={styles.adultAge}>Recommended: 2-4</Text>
          </View>
          {/** row 1 Infants buttons */}
          <View style={styles.adultButtons}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text>-</Text>
            </Pressable>
            <Text style={styles.counterText}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'Search Results',
              },
            })
          }
          style={styles.searchButton}>
          <Text style={styles.searchText}>
            {/* <Text style={{color: 'white', fontSize: 20, fontWeight: 'bold'}}> */}
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default GuestScreen;
