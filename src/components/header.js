import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>header</Text>
    </View>
  );
}

export default header;

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'coral',
    height: 80,
    paddingTop: 38,
  },
  title: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
