import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import styles from './LoginButton.style';

const LoginButton = ({text, onPress, loading,theme="primary"}) => {
  return (
    <TouchableOpacity
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white"></ActivityIndicator>
      ) : (
        <Text style={styles[theme].title}>{text}</Text>
      )}
    </TouchableOpacity>
  );
};

export default LoginButton;
