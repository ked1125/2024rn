import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import IconButton from './IconButton';
import Icons from '../Icons';

const Task = ({item, deleteTask, checkCompleted, updateTask}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(item.text);

  const _onSubmit = () => {
    setIsEditing(false);
    updateTask(item.id, text);
  };

  //   return isEditing ?(<></>): (
  return isEditing ? (
    <>
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
        onSubmitEditing={_onSubmit}
        onBlur={_onSubmit}
        autoFocus={true}
      />
    </>
  ) : (
    <>
      <View style={styles.container}>
        {/* <IconButton icon={Icons} /> */}
        <IconButton
          icon={item.completed ? Icons.checked : Icons.check}
          onPress={() => checkCompleted(item.id)}
        />
        <Text style={{flex: 1}}>{item.text}</Text>
        {item.completed || (
          <IconButton icon={Icons.edit} onPress={() => setIsEditing(true)} />
        )}
        {/* {item.completed && (
              <IconButton icon={Icons.edit} onPress={() => alert('edit')} />
            )} */}
        {/* <IconButton icon={Icons.checked} onPress={() => alert('checked')} /> */}

        <IconButton icon={Icons.delete} onPress={() => deleteTask(item.id)} />
      </View>
    </>
  );
};

export default Task;

const styles = StyleSheet.create({
  container: {
    marginBottom: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 7,
    paddingVertical: 5,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  input: {
    width: '100%',
    backgroundColor: 'skyblue',
    borderRadius: 10,
    paddingHorizontal: 16,
  },
});
