import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';

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

  return (
    <View>
      {/** row 1 Adults */}
      <View style={styles.row}>
        {/** row 1 Adults text */}
        <View>
          <Text style={styles.adult}>Adults</Text>
          <Text style={styles.adultAge}>Ages 13 or above</Text>
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
        {/** row 1 Adults text */}
        <View>
          <Text style={styles.adult}>Children</Text>
          <Text style={styles.adultAge}>Ages 3 to 12</Text>
        </View>
        {/** row 1 Adults buttons */}
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
        {/** row 1 Adults text */}
        <View>
          <Text style={styles.adult}>Infants</Text>
          <Text style={styles.adultAge}>Ages 2 or under</Text>
        </View>
        {/** row 1 Adults buttons */}
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
  );
};

export default GuestScreen;
