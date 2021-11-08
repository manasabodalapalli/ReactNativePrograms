import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';


export default function Circle () {
    return (
      <View style={styles.container}>
        <View style={styles.CircleShape} />
        <View style={styles.CircleShape1} />
        <View style={styles.CircleShape2} />
      </View>
    );
  
}

const styles = StyleSheet.create({
  container: {
    marginTop:20,
    flex: 1,
    flexDirection:'row',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FAFDFC",
  },
  
  CircleShape: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#0AFBED',
  },
  CircleShape1: {
    width: 15,
    height: 15,
    margin:5,
    borderRadius: 20/ 2,
    backgroundColor: '#CDD1D1',
  },
  CircleShape2: {
    width: 15,
    height: 15,
    borderRadius: 15 / 2,
    backgroundColor: '#CDD1D1',
  },

});