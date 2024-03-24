import React, { useState } from 'react';
import { StyleSheet, View,Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Appbar, Button, IconButton, MD3Colors, ProgressBar , TextInput } from 'react-native-paper';

export default function Profile({ navigation }) {
    const[text,setText] = useState("");
    const onPressClickSave  = () => {
    };
    const onPressClickDone  = () => {
      console.log("Home")
      navigation.navigate('Home')
    };
  return (
    <SafeAreaView style={styles.container}>
        <View style={styles.header}>
        <Text style={styles.Title}>Settings</Text></View>
        <View style={styles.inputContainer}>
            <Text style={styles.test}>Email:</Text>
            <TextInput style={styles.input} value={text} 
            onChangeText={setText} />
            <Text style={styles.test}>My email is {text}</Text>
            <TextInput style={styles.input}/>
        </View>
        <View style= {styles.footer}>
            <Button labelStyle={{color: 'black'}} style={styles.saveButton} mode="contained" onPress={onPressClickSave}>Save</Button>
            <View style={{ marginLeft: 20 }} />
            <Button style={styles.doneButton} mode="contained" onPress={onPressClickDone}>
                Done
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
        borderColor: '#145DA0',
        borderWidth:3
    },
    test:{
        justifyContent: 'center',
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
        width: 120,
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
