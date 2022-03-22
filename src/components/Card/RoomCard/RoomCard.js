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
      <View style={styles.inner_container}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.user}>{formattedDate}</Text>
      </View>
      <Text style={styles.title}>{message.text}</Text>
      <View style={styles.footer}>
        <TouchableOpacity  onPress={onLike}>
          {!!message.dislike && (
            <View style={styles.dislike_count_container}>
              <Text style={styles.dislike_count_text}>{message.dislike}</Text>
            </View>
          )}
          <LinearGradient
            colors={['#24C6DC', '#514A9D']}
            style={styles.gradientButton}>
            <Text style={styles.gradientButtonButtonText}>Napim!</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageCard;
