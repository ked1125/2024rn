import {Button, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Generator = ({add}) => {
  return (
    <View style={styles.Generator}>
      {/* <Text>Generator</Text> */}
      <Button
        title="번호추가"
        onPress={() => {
          add();
          //   console.log('클릭');
        }}
      />
    </View>
  );
};

export default Generator;

const styles = StyleSheet.create({
  Generator: {
    paddingHorizontal: 16,
    marginTop: 20,
  },
});
