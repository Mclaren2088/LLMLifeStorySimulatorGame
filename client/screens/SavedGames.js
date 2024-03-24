import React , { useState} from 'react';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native';
import { Appbar, IconButton, MD3Colors, ProgressBar} from 'react-native-paper';

import PastLives  from '../components/PastLives';
export default function SavedGames({ navigation}) {
  const [pastLives, setPastLives] = useState([]); // State to hold life events
  const addPastLife = () => {
    // Create a new life event object
    const newLife = {
      name: "Temporary Name",
      text: "New Text"
    };
    setPastLives([...pastLives, newLife]);
  };  
    // handle if user has click save or not,
    const onBack = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.BackAction onPress={onBack} />
        <Appbar.Content titleStyle = {styles.heading} title={`Past Lives`} />
      </Appbar.Header>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          {pastLives.map((event, index) => (
            <PastLives 
              key={index}
              name={event.name}
              text={event.text}
            />
          ))}
        </View>
      </ScrollView>
      <View style={styles.centeredButtonContainer}>
        <IconButton
          icon="plus"
          color={MD3Colors.green500}
          size={50} // Set the size as needed
          onPress={() => console.log('Pressed')}
        />
      </View>
      <ProgressBar
        progress={0.5}
        color={MD3Colors.error50}
        style={{ height: 10, width: '80%' }} // Set the height and width here
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    backgroundColor: '#59F2FF',
  },
  appBar: {
    backgroundColor: '#59F2FF',
    marginTop: StatusBar.currentHeight || 0,
  },
  heading: {
    fontSize: 25,
    fontWeight: 'bold'
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollViewContent: {
    flexGrow: 1,
    borderColor: '#000000',
    borderWidth: 3
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingVertical: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  centeredButtonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});