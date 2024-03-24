import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Game from './screens/Game';
import NewGame from './screens/NewGame';
import SavedGames from './screens/SavedGames';
import Profile from './screens/Profile';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false, stackAnimation: 'slide_from_right'}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Game" component={Game}/>
        <Stack.Screen name="NewGame" component={NewGame}/>
        <Stack.Screen name="SavedGames" component={SavedGames}/>
        <Stack.Screen name="Profile" component={Profile}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}