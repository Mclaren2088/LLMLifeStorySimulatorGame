import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function PastLives({ text, name }) {
    return (
      <View style={styles.container}>
        <View>
            <Text style={styles.name}>{name}</Text>
        </View>
        <Text style={styles.text}>{text} </Text>
        </View>
    );
  }

  const styles = StyleSheet.create({
    name:{
        fontSize: 20,
        paddingBottom:10,
        fontWeight: 'bold'
    },
    container: {
      flex: 1,
      backgroundColor: '#FFFFFF',
      borderColor: '#000000',
      borderWidth:3,
      borderRadius: 3 
    },
    text: {
      fontSize: 14,
    }
});
