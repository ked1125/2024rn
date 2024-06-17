import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';

const IconButton = ({icon, onPress}) => {
  return (
    <TouchableOpacity style={styles.touchWrap} onPress={onPress}>
      <View>
        {/* <Image source={icon.check} />
        <Image source={icon.checked} />
        <Image source={icon.edit} />
        <Image source={icon.delete} /> */}
        <Image source={icon} style={{width: 30, height: 30}} />
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  touchWrap: {
    width: 30,
    height: 30,
    margin: 5,
  },
});
