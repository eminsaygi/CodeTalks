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
  const [visible, setVisible] = useState(false);
  const [contentList, setContentList] = useState([]);

  useEffect(() => {
    database()
      .ref('Rooms/')
      .on('value', snapshot => {
        const contentData = snapshot.val();

        const parsedData = parseContentData(contentData || {});
        setContentList(parsedData);
      });
  }, []);

  const handleRoomPress = room => {
    navigation.navigate('MessagesPage', room);
  };

  function handleInputToggle() {
    setVisible(!visible);
  }

  const handleSendRoom = roomText => {
    handleInputToggle();
    sendContent(roomText);
  };

  const sendContent = content => {
    const user = auth().currentUser.email;
    const data = {
      roomCreator: user.split('@')[0],
      room: content,
    };
    database().ref('Rooms').child(content).push(data);
  };

  const renderContent = ({item}) => (
    <RoomCard rooms={item} onPress={handleRoomPress}></RoomCard>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={contentList}
        renderItem={renderContent}
        numColumns={2}></FlatList>

      <ContentInputModal
        visible={visible}
        onClose={handleInputToggle}
        onSend={handleSendRoom}></ContentInputModal>
      <FloatingButton icon="plus" onPress={handleInputToggle} />
    </SafeAreaView>
  );
};
export default Messages;
