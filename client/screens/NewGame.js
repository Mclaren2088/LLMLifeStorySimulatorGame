import React, { useEffect, useState } from 'react';
import { StyleSheet, View,Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { List, Appbar, Button, IconButton, MD3Colors, ProgressBar , TextInput } from 'react-native-paper';
import axios from 'axios';

export default function NewGame({ navigation }) {
  const[name,setName] = useState("");
  const[location,setLocation] = useState("");
  const[gender,setGender] = useState("");

  const onPressClickRandomize  = () => {
        console.log("randomize");
    };
  const onPressClickDone  = () => {
      console.log("Play");
      navigation.navigate('Game', { name, gender, location });
    };
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.Title}>Who are you?</Text></View>
        <View style={styles.inputContainer}>
            <Text style={styles.test}>My name is {name}</Text>
            <TextInput style={styles.input} value={name} 
            onChangeText={setName} />
            <Text style={styles.test}>My gender is {gender}</Text>
            <TextInput style={styles.input} value={gender} 
            onChangeText={setGender} />

<Text style={styles.test}>I'm born in {location}</Text>
            <TextInput style={styles.input} value={location} 
            onChangeText={setLocation} />
      

        </View>
        <View style= {styles.footer}>
            <Button labelStyle={{color: 'black'}} style={styles.saveButton} mode="contained" onPress={onPressClickRandomize}>Randomize</Button>
            <View style={{ marginLeft: 20 }} />
            <Button style={styles.doneButton} mode="contained" onPress={onPressClickDone}>
                Play
            </Button>
        </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    header: {
    },
    Title: {
      fontSize: 35,
      fontWeight: 'bold',
    },
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        marginTop: 20,
    },
    input:{
        height: 45,
        width: 250,
        borderColor: '#000000',
        borderWidth:3
    },
    test:{
        fontSize:20,
        margin: 10
    },
    footer:{
        flexDirection: 'row', // Arrange buttons horizontally
        justifyContent: 'space-between', // Space buttons evenly
        alignItems: 'center', // Center buttons vertically
        paddingHorizontal: 20, // Add horizontal padding to buttons
        paddingBottom: 20,
    },
    saveButton: {
        width: 180,
        height: 50,
        borderColor: '#00A4DB',
        backgroundColor: '#FFFFFF',
        color: '#000000',
        borderWidth: 5,
        justifyContent: 'center', // Center the text vertically inside the button
        alignItems: 'center', 
    },
    doneButton: {
        width: 120,
        height: 50,
        backgroundColor: '#00A4DB',
        justifyContent: 'center', // Center the text vertically inside the button
        alignItems: 'center', 
    }
});
