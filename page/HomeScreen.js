// rnfes
import {Button, StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import MyImage from '../assets/image/cat.png';

const HomeScreen = ({navigation}) => {
  return (
    // <View style={{paddingHorizontal: 16}}>
    <View style={styles.container}>
      {/* <Text>HomeScreen</Text> */}
      <Image source={MyImage} style={{width: '100%'}} />
      <Button
        title="go Profile"
        onPress={() => navigation.navigate('Profile')}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    // alignItems: 'center',
    // alignItems를 주석하면 stretch된다
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
});

export default HomeScreen;
