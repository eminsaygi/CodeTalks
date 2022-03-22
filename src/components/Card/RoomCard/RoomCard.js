import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import styles from './RoomCard.style';

const RoomCard = ({rooms, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={() => onPress(rooms)}>
      <Text style={styles.text}>{rooms.roomName}</Text>
    </TouchableOpacity>
  );
};

export default RoomCard;
