import { StyleSheet, View } from 'react-native';
import { Button, Title } from 'react-native-paper';

export default function Home({ navigation }) {

const onPressClickNewGame = () => {
  navigation.navigate('NewGame')
  console.log("NewGame")
};
const onPressClickLoadGame  = () => {
  navigation.navigate('SavedGames')
  console.log("SavedGames")
};
const onPressClickSettings  = () => {
  console.log("Profile")
  navigation.navigate('Profile')
};
  return (
    <View style={styles.container}>
      <Title style ={styles.title}>Life Changer</Title>
      <View style={styles.buttonStack}>
        <Button mode="contained" onPress={onPressClickNewGame} buttonColor='#5b1f5c' textColor='#e3e2de'>
          New Game
        </Button>
        <Button mode="contained" onPress={onPressClickLoadGame} buttonColor='#5b1f5c' textColor='#e3e2de'>
          Load Game
        </Button>
        <Button mode="contained" onPress= {onPressClickSettings} buttonColor='#5b1f5c' textColor='#e3e2de'>
          Settings
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  title:{
    fontSize: 35,
    fontWeight: 'bold',
    padding: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#59F2FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStack: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
});
