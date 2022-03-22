import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 57,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bdbdbd',
    backgroundColor: colors.orange,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  title: {
    fontSize: 26,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});
