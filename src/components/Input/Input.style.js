import {StyleSheet, Platform} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#e6e6e6',
    margin: 10,
    padding: 10,
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#333',
    padding: Platform.OS == 'android' ? 0 : 5,
  },
});
