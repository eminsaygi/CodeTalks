import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './FloatingButton.style';

const FloatingButton = ({onPress, icon, isLoading}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Icon name={icon} size={30} color="white"></Icon>
    </TouchableOpacity>
  );
};
export default FloatingButton;
