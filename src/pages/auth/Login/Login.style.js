import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../../styles/colors';
const devicesize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7043',
  },
  body_container: {flex: 1},
  header: {
    margin: 5,
    alignItems: 'center',
    fontSize: devicesize.width * 0.15,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  footerContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 20,
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  backButton: {
    marginBottom: devicesize.height * 0.15,
  },
});
