import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  topContainer: {
    // backgroundColor: 'yellow',
    justifyContent: 'space-between',
    height: '100%',
  },
  row: {
    flexDirection: 'row',
    // put items on left and right of container (space in between)
    justifyContent: 'space-between',
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginHorizontal: 20,
  },
  adult: {
    color: 'black',
    fontWeight: 'bold',
  },
  adultAge: {
    color: 'darkgrey',
  },
  adultButtons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    // make item center (middle vertical + horizontal)
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'darkgrey',
    fontSize: 20,
  },
  counterText: {
    marginHorizontal: 20,
    fontSize: 20,
    color: 'darkgrey',
  },
  searchButton: {
    // backgroundColor: 'yellow',
    marginBottom: 20,
    height: 50,
    backgroundColor: 'orange',
    marginHorizontal: 20,
    // horizontal
    alignItems: 'center',
    // vertical
    justifyContent: 'center',
  },
  searchText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default styles;
