import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './Input.style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, value, onType, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
      autoCapitalize='none'
        placeholder={placeholder}
        onChangeText={onType}
        style={styles.input}
        value={value}
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={25} color="gray"></Icon>
    </View>
  );
};

export default Input;
