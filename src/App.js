import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import colors from './styles/colors';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';
import Sign from './pages/auth/Sign';
import Login from './pages/auth/Login';
import Rooms from './pages/Rooms';
import Message from './pages/Message';

const Stack = createNativeStackNavigator();

const optionsStack = {
  title: 'Odalar',
  headerShown: true,
  headerTintColor: colors.orange,
  headerTitleStyle: {
    fontWeight: 'bold',
  },
  headerRight: () => (
    <Icon
      name="logout"
      size={30}
      color={colors.orange}
      onPress={() => auth().signOut()}></Icon>
  ),
};

const App = () => {
  const [userSession, setUserSession] = useState();

  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);

  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />

        <Stack.Screen name="SignPage" component={Sign} />
      </Stack.Navigator>
    );
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {!userSession ? (
          <Stack.Screen name="AuthStack" component={AuthStack} />
        ) : (
          <Stack.Screen
            name="RoomsPage"
            component={Rooms}
            options={optionsStack}
          />
        )}
        <Stack.Screen
          name="MessagePage"
          component={Message}
          options={optionsStack}
        />
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
};

export default App;
