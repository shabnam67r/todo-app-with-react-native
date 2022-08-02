import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
// import {Icon} from 'react-native-elements';
import Icon from '../../node_modules/react-native-vector-icons/Ionicons';
function todosItem({item, pressHandler}) {
  return (
    <TouchableOpacity style={styles.item}>
      <Text >{item.text}</Text>
      <Icon name="trash" size={20} type="Ionicons" onPress={() => pressHandler(item.key)}/>
    </TouchableOpacity>
  );
}

export default todosItem;

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row'
  },
});
