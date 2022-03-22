import React from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import styles from './RoomCard.style';

import {formatDistance, parseISO} from 'date-fns';
import {tr} from 'date-fns/locale';
import LinearGradient from 'react-native-linear-gradient';
const MessageCard = ({message, onLike}) => {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: tr,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{message.text}</Text>
    </View>
  );
};

export default MessageCard;
