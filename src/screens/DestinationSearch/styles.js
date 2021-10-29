import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    margin: 10,
  },
  textInput: {
    fontSize: 18,
    marginBottom: 10,
  },
  row: {
    // display items inside container in same row
    flexDirection: 'row',
    // center horizontally
    alignItems: 'center',
    // justifyContent: 'center',
    // spacing vertical b/w items in container
    // marginVertical: 15,
    // border to bottom of line
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  iconContainer: {
    // backgroundColor: 'blue',
    marginRight: 10,
    padding: 5,
  },
  destinationText: {},
});

export default styles;
