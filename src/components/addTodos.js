/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState} from 'react';
import {Button, StyleSheet, TextInput, View} from 'react-native';

function addTodos({submitHandler}) {
  const [text, setText] = useState('');
  const changeHandler = value => {
    setText(value);
  };
  const anotherFunc = val => {
    setText('');
  };
  return (
    <View>
      <TextInput
        style={styles.input}
        onChangeText={changeHandler}
        placeholder="Add task"
        clearTextOnFocus="true"
      />
      <Button
        onPress={() => {
          submitHandler(text)

           anotherFunc(text);
       
        }}
        title="Add ToDo"
        color="coral"
      />
    </View>
  );
}

export default addTodos;
const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
});
