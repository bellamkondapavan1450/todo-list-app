import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import NotesScreenComponent from './src/NotesScreenComponent';
import firebase from 'firebase';
import LoginScreenComponent from './src/LoginScreenComponent';

export default function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  if(firebase.apps.length === 0){
    var firebaseConfig = {
      apiKey: "AIzaSyBqKo3y2fV3QasViTP-g0sQ-1z_Bm71XQU",
      authDomain: "todo-list-b8c05.firebaseapp.com",
      projectId: "todo-list-b8c05",
      storageBucket: "todo-list-b8c05.appspot.com",
      messagingSenderId: "295617168420",
      appId: "1:295617168420:web:e6fb7d33e897b8ed7f44b1"
    };
    firebase.initializeApp(firebaseConfig);
  }

  firebase.auth().onAuthStateChanged((user) => {
    if(user === null) {
      setUserLoggedIn(false)
    } else {
      setUserLoggedIn(true)
    }
  })

  if(userLoggedIn) {
    return (
      <View style={styles.container}>
        <NotesScreenComponent/>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <LoginScreenComponent/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});