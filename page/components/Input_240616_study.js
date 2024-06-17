import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';

const Input = ({onChangeText, todoText}) => {
  const onChangeInput = text => {
    // onChangeInput = (event)=>{onChangeText(event.target.value)}와 유사 :>
    onChangeText(text);
  };

  return (
    <>
      <TextInput
        style={styles.input}
        onChangeText={onChangeInput} // props해온거 아니고, 내장함수 onChangeText임
        maxLength={20}
        autoCapitalize="none"
        value={todoText}
      />
    </>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: '100%',
    backgroundColor: '#cecece',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
});
