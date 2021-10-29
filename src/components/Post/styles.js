import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  image: {
    // width will be 100% of container
    width: '100%',
    // fixed height bad - will look diff on diff screens
    // aspect ratio will look same on all screens
    // (3 horizontal, 2 height)
    aspectRatio: 3 / 2,
    // cover whole area
    resizeMode: 'cover',
    // border radius = round borders
  },
  bedrooms: {
    // margin on top + bottom
    marginVertical: 5,
    // marginTop: 10,
    // default size = 14
    // fontSize: 14,
    color: '#a9a9a9',
  },
  typeTitle: {
    color: '#a9a9a9',
  },
  description: {
    fontSize: 18,
    lineHeight: 26,
  },
  prices: {
    fontSize: 18,
    marginVertical: 10,
  },
  oldPrice: {
    color: '#a9a9a9',
    textDecorationLine: 'line-through',
  },
  newPrice: {
    fontWeight: 'bold',
  },
  totalPrice: {
    color: '#a9a9a9',
    textDecorationLine: 'underline',
  },
});

export default styles;
