import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const Header = ({title, onPressView}) => {
  //App.tsx에서 props해온거
  return (
    <TouchableOpacity
      //   onPress={() => alert('test')}
      onPress={() => {
        onPressView();
      }}
      //   onLongPress={() => alert('long')}
      //   onPressIn={() => alert('in')}
      //   onPressOut={() => alert('out')}
    >
      <View style={styles.header}>
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'pink',
    width: '100%',
    padding: 16,
    alignItems: 'center',
  },
});
export default Header;
