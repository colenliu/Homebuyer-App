import React from 'react';
import {View, Text, Image} from 'react-native';

import {APARTMENT_IMAGE_URL} from '../../../assets/sources';

import styles from './styles';

/**
 * Image
 * Bed and bedroom
 * Type and description
 * Old price and new price
 * Total price
 *
 * note: each text has diff styling
 */

const Post = props => {
  return (
    // container styles contains everything
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: APARTMENT_IMAGE_URL,
        }}
      />
      <Text style={styles.bedrooms}>2 Bed 2 Bedrooms</Text>
      <Text style={styles.description} numberOfLines={2}>
        A spacious flat overlooking the modern yet simple Downtown area of
        Vancouver. Recently built less than a year ago, one would be a fool to
        pass up this opportunity.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$3000/month </Text>
        <Text style={styles.newPrice}> $2800/month</Text>
      </Text>
      <Text style={styles.totalPrice}>$590,000 total</Text>
    </View>
  );
};

export default Post;
