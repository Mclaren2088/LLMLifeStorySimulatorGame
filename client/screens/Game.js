import React , { useState} from 'react';
import axios from 'axios';
import { StyleSheet, SafeAreaView, ScrollView, StatusBar, View, Text } from 'react-native';
import { Appbar, IconButton, MD3Colors, ProgressBar,Portal, Dialog ,PaperProvider, Paragraph,Button} from 'react-native-paper';

import LifeEvent  from '../components/LifeEvent';
export default function Game({ navigation , route}) {
  const name = route.params.name;
  console.log(name);
  const [title, setTitle] = React.useState(name || 'Place Holder Name'); // State to hold the title
  const [lifeEvents, setLifeEvents] = useState([]); // State to hold life events

  //useEffect(createNewSession())

  const createNewSession = async () => {
    //Make connection with model
  axios.post('https://www.llama2.ai/api', {"prompt":"<s>[INST] <<SYS>>\nYou are a helpful assistant.\n<</SYS>>\n\nI love chickens [/INST]\n",
  "model":"meta/llama-2-70b-chat","systemPrompt":"You are a helpful assistant.",
  "temperature":0.75,"topP":0.9,"maxTokens":800,"image":null,"audio":null})
    .then(function (response) {
    // handle
    console.log(response);
      data = response.data;
    const newEvent = {
      heading: "New Heading",
      text: "${data}"
    };
    setLifeEvents([...lifeEvents, newEvent]);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed

    const newEvent = {
      heading: "New Heading",
      text: "New Text"
    };
    setLifeEvents([...lifeEvents, newEvent]);
  });
  }
  const getExistingSession = async() =>{
    // fetch based on id from saved games
    const res = await axios.get("http://localhost:3500/");
  }
  const addLifeEvent = () => {
  axios.post('https://www.llama2.ai/api', {"prompt":"<s>[INST] <<SYS>>\nYou are a helpful assistant.\n<</SYS>>\n\nI love chickens [/INST]\n",
  "model":"meta/llama-2-70b-chat","systemPrompt":"You are a helpful assistant.",
  "temperature":0.75,"topP":0.9,"maxTokens":800,"image":null,"audio":null})
    .then(function (response) {
    // handle
    console.log(response);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    // always executed

    const newEvent = {
      heading: "New Heading",
      text: "New Text"
    };
    setLifeEvents([...lifeEvents, newEvent]);
  });
    // Create a new life event object
  };
    // handle if user has click save or not,
    const onBack = () => {
    navigation.navigate('Home')
  };
  return (
    <View style={styles.container}>
      <Appbar.Header style={styles.appBar}>
        <Appbar.BackAction onPress={onBack} />
        <Appbar.Content titleStyle = {styles.heading} title={`Life of: ${title}`} />
      </Appbar.Header>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.contentContainer}>
          {lifeEvents.map((event, index) => (
            <LifeEvent 
              key={index}
              heading={event.heading}
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
          onPress={addLifeEvent}
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