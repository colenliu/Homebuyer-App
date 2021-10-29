import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
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
});

export default styles;
