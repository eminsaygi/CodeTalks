import {StyleSheet, Dimensions} from 'react-native';

const devicesize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 15,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderRightRadius: 10,
    height: devicesize.height / 3,
  },
  input_container: {
    flex: 1,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});
