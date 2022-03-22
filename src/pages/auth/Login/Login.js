import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {Formik} from 'formik';
import {showMessage} from 'react-native-flash-message';

import Input from '../../../components/Input';
import Button from '../../../components/Button/LoginButton';
import styles from './Login.style';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import auth from '@react-native-firebase/auth';

const initialFormValues = {
  usermail: '',
  password: '',
};

const Login = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  const handleSignUp = () => {
    navigation.navigate('SignPage');
  };

  async function handleFormSubmit(formValues) {
    try {
      setLoading(true);
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
      navigation.navigate('MessagesPage');
      setLoading(false);
    } catch (error) {
      console.log(error.code);
      showMessage({
        message: authErrorMessageParser(error.code),
        type: 'danger',
      });
      setLoading(false);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.footerContainer}>
        <Text style={styles.header}> Code Talks</Text>
      </View>

      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <View style={styles.bottomContainer}>
              <Input
                onType={handleChange('usermail')}
                value={values.usermail}
                iconName="gmail"
                placeholder="E-postanızı giriniz..."></Input>
              <Input
                onType={handleChange('password')}
                value={values.password}
                iconName="key"
                placeholder="Şirenizi giriniz..."
                isSecure></Input>
              <Button
                text="Giriş Yap"
                onPress={handleSubmit}
                loading={loading}></Button>
            </View>
          </>
        )}
      </Formik>
      <View style={styles.backButton}>
        <Button
          text="Kayıt Ol"
          theme="secondary"
          onPress={handleSignUp}></Button>
      </View>
    </SafeAreaView>
  );
};

export default Login;
