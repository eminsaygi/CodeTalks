import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, FlatList} from 'react-native';
import FloatingButton from '../../components/Button/FloatingButton';
import styles from './Rooms.style';
import ContentInputModal from '../../components/modal/ContentInputModal';
import parseContentData from '../../utils/parseContentData';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import RoomCard from '../../components/Card/RoomCard';

const Messages = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('messages/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  function handleInputToggle() {
    setInputModalVisible(!inputModalVisible);
  }

  function handleSendContent(content) {
    handleInputToggle();
    sendContent(content);
  }

  function sendContent(content) {
    const userMail = auth().currentUser.email;

    const contentObject = {
      text: content,
      username: userMail.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };
    database().ref('messages/').push(contentObject);
  }

  function handleLike(item) {
    database()
      .ref(`messages/${item.id}/`)
      .update({dislike: item.dislike + 1});
  }
  const renderContent = ({item}) => (
    <RoomCard message={item} onLike={null}></RoomCard>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent}></FlatList>
      <FloatingButton icon="plus" onPress={handleInputToggle} />

      <ContentInputModal
        visible={inputModalVisible}
        onClose={handleInputToggle}
        onSend={handleSendContent}></ContentInputModal>
    </SafeAreaView>
  );
};
export default Messages;
