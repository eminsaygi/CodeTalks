import {StyleSheet} from 'react-native';
import colors from '../../styles/colors'
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title_container: {
    paddingVertical: 10,
    alignItems: 'center',
    borderBottomColor: colors.orange,
    borderBottomWidth: 2,
  },
  title: {
    color: colors.orange,
    fontSize: 20,
    fontWeight: 'bold',
  },
});
