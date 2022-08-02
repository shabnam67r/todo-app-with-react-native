/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';

import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Header from './src/components/header';
import TodosItem from './src/components/todosItem';
import AddTodos from './src/components/addTodos';
const App = () => {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'buy tea', key: '2'},
    {text: 'buy fruit', key: '3'},
  ]);
  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };
  const submitHandler = text => {
    if (text.length > 3) {
      setTodos(prevTodos => {
        return [{text: text, key: Math.random().toString()}, ...prevTodos];
      });
    } else {
      Alert.alert('OOPS!', 'Todos chatacter must be over 3 chars long', [
        {text: 'ok', onPress: () => console.log('alert closed')},
      ]);
    }
  };

  return (
    <TouchableNativeFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          {/* to form */}
          <View style={styles.list}>
            <AddTodos submitHandler={submitHandler} />
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodosItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#000',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
});

export default App;
