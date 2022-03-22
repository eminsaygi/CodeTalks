import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FlashMessage from 'react-native-flash-message';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import auth from '@react-native-firebase/auth';

import SignUp from './pages/auth/Sign';
import Login from './pages/auth/Login';
import Rooms from './pages/Rooms';
import Messages from './pages/Message';
import colors from './styles/colors';

const Stack = createNativeStackNavigator();

function App() {
  const [userSession, setUserSession] = React.useState();

  React.useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  const AuthStack = () => {
    return (
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="LoginPage" component={Login} />
        <Stack.Screen name="SignUpPage" component={SignUp} />
      </Stack.Navigator>
    );
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!userSession ? (
          <Stack.Screen
            name="AuthStack"
            component={AuthStack}
            options={{headerShown: false}}
          />
        ) : (
          <Stack.Screen
            name="RoomsPage"
            component={Rooms}
            options={{
              title: 'Rooms',
              headerTintColor: colors.orange,
              headerRight: () => (
                <Icon
                  name="logout"
                  size={40}
                  color={colors.orange}
                  onPress={() => auth().signOut()}
                />
              ),
            }}
          />
        )}
        <Stack.Screen
          name="MessagesPage"
          component={Messages}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
      <FlashMessage position="top" duration={3000} statusBarHeight={30}/>
    </NavigationContainer>
  );
}

export default App;
