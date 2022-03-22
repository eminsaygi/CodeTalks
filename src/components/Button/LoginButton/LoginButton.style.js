import {StyleSheet} from 'react-native';
import Colors from '../../../styles/colors'
const base_style = StyleSheet.create({
  container: {
    alignItems: 'center',
    borderRadius: 5,
    borderColor: '#e6e6e6',
    padding: 10,
    margin: 10,
  },
  title: {fontWeight: 'bold', fontSize: 16, color: 'white'},
});
export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: Colors.darkgreen,
    },
    title: {...base_style.title},
  }),
  secondary: StyleSheet.create({
    container: {
      ...base_style.container,
      backgroundColor: 'white',
      borderColor: Colors.darkgreen,
      borderWidth: 1,
    },
    title: {...base_style.title, color: Colors.darkgreen},
  }),
};
