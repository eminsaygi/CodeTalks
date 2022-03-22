import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 7,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#bdbdbd',
    backgroundColor: colors.darkgreen,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  inner_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  user: {
    marginVertical: 8,
    color: '#EEF0EB',
    fontSize: 15,
    paddingBottom: 5,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  dislike_container: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
  dislike_count_container: {
    backgroundColor: '#EEF0EB',
    borderRadius: 50,
    padding: 5,
    marginRight: 5,
  },
  gradientButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 4,
  },
  gradientButtonButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
});
