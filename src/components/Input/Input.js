import React from 'react';
import {TextInput, View} from 'react-native';

import styles from './Input.style';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Input = ({placeholder, value, onChangeText, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={value}
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="white"
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={25} color="gray"></Icon>
    </View>
  );
};

export default Input;
