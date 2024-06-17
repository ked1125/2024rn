// rnfes하고나서 styles 위로 올려야댐

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './page/HomeScreen';
import ProfileScreen from './page/ProfileScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: '홈', // 설정 안해주면 name인 Home이 뜬다,
            // headerTitleAlign: 'center', // headerTitle 가운데정렬
            headerTitleAlign: 'left',
            headerStyle: {
              backgroundColor: 'skyblue',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 22,
              color: 'white',
            },
            // headerShown: false,  // 처음 진입시 안보이게 하는거?:<
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={
            {
              // headerTitleAlign: 'center', // headerTitle 가운데정렬
            }
          }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({});
export default App;
