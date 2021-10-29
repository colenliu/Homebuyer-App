import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    // image will cover whole viewing area on where it's displayed
    resizeMode: 'cover',
    // display text center of image vertically (parent component)
    // (horizontal = alignItems)
    justifyContent: 'center',
    // position: 'absolute',
    // zIndex: 0,
  },
  title: {
    fontSize: 75,
    fontFamily: 'Times New Roman',
    fontWeight: 'bold',
    color: 'yellow',
    // how much letters go can across screen
    width: '75%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: 'white',
    width: 260,
    height: 40,
    marginLeft: 25,
    marginTop: 15,
    borderRadius: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  searchBar: {
    backgroundColor: 'white',
    width: Dimensions.get('screen').width - 20,
    borderRadius: 0,
    // display icon and text side-by-side
    flexDirection: 'row',
    height: 40,
    top: 5,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
    elevation: Platform.OS === 'android' ? 50 : 0,
    position: 'absolute',
    marginHorizontal: 10,
    // overflow: 'visible',
    // marginLeft: 20,
    // marginRight: 20,
    // display on top of image and on top of everything else
    // position: 'absolute',
    // display 50 pixels from the top
    // top: 50,
    // make sure display on top of anything else
    // zIndex: 1,
    // position: 'absolute'
  },
  searchBarText: {
    fontSize: 16,
    // fontWeight: 'bold',
  },
});

export default styles;