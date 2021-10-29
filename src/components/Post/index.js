import React from 'react';
import {View, Text, Image} from 'react-native';

import {
  APARTMENT_IMAGE_URL,
  FIRST_APARTMENT_DESCRIPTION,
} from '../../../assets/sources';

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
  const post = props.post;

  return (
    // container styles contains everything
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: post.image,
        }}
      />
      <Text style={styles.bedrooms}>
        {post.bed} Bed {post.bedroom} Bedrooms
      </Text>
      <Text style={styles.typeTitle}>
        [{post.type} - {post.title}.]
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {FIRST_APARTMENT_DESCRIPTION}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice}/month </Text>
        <Text style={styles.newPrice}> ${post.newPrice}/month</Text>
      </Text>
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

export default Post;
