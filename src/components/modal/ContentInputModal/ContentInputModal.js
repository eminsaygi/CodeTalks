import React from 'react';
import {View, TextInput} from 'react-native';
import Modal from 'react-native-modal';

import styles from './ContentInputModal.style';
import Button from '../../Button/LoginButton';

const ContentInputModal = ({visible, onClose, onSend}) => {
  const [text, setText] = React.useState(null);

  function handleSend() {
    if (!text) {
      return;
    }

    onSend(text);
    setText(null);
  }
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPres={onClose}>
      <View style={styles.container}>
        <View style={styles.input_container}>
          <TextInput
            placeholder="Derdin umrumda değil ama anlat.."
            onChangeText={setText}
            multiline
          />
        </View>
        <Button text="Gönder" onPress={handleSend}></Button>
      </View>
    </Modal>
  );
};
export default ContentInputModal;
