import React, {useState} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './Sign.style';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message';

import Input from '../../../components/Input';
import Button from '../../../components/Button/LoginButton';
import authErrorMessageParser from '../../../utils/authErrorMessageParser';

import {Formik} from 'formik';

const initialFormValues = {
  usermail: '',
  password: '',
  repassword: '',
};

const Sign = ({navigation}) => {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    navigation.goBack();
  }

  async function handleFormSubmit(formvalues) {
    if (formvalues.password !== formvalues.repassword) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formvalues.usermail,
        formvalues.repassword,
      );
      navigation.navigate('LoginPage');

      showMessage({
        message: 'Kayıt başarılı',
        type: 'success',
      });
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
        <Text style={styles.header}> Code Talk</Text>
      </View>
      <Formik initialValues={initialFormValues} onSubmit={handleFormSubmit}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <View style={styles.bottomContainer}>
              <Input
                value={values.usermail}
                onType={handleChange('usermail')}
                iconName="gmail"
                placeholder="E-postanızı giriniz..."></Input>
              <Input
                value={values.password}
                onType={handleChange('password')}
                iconName="key"
                placeholder="Şirenizi giriniz..."
                isSecure></Input>
              <Input
                value={values.repassword}
                onType={handleChange('repassword')}
                iconName="key"
                placeholder="Şirenizi tekrar giriniz..."
                isSecure></Input>

              <Button
                text="Kayıt Ol"
                onPress={handleSubmit}
                loading={loading}></Button>
            </View>
          </>
        )}
      </Formik>
      <View style={styles.backButton}>
        <Button text="Geri" theme="secondary" onPress={handleLogin}></Button>
      </View>
    </SafeAreaView>
  );
};
export default Sign;
