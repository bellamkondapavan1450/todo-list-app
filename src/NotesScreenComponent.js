import React, {useState} from 'react';
import {FlatList, View, StyleSheet, Button} from 'react-native';
import CreateNoteComponent from './CreateNoteComponent';
import SingleNoteSummaryComponent from './SingleNoteSummaryComponent';
import firebase from 'firebase';
import LoginScreenComponent from './LoginScreenComponent';

const NotesScreenComponents = () => {
    
    const [data, setData] = useState([]);

    const addNewNote = (text) => {
        if(text.length > 0){
            setData([{"date": new Date(), "text": text}, ...data])
        }
    }

    return <View style={styles.viewProperties}>
        <View style={styles.buttonProperties}>
            <Button
                title="LogOut"
                onPress={() => {
                    firebase.auth().signOut()
                }}
            />
        </View>
        
        <CreateNoteComponent onCreateButtonPress={(text) => addNewNote(text)}/>
        
        <FlatList
            showsVerticalScrollIndicator = {false}
            style={styles.listProperties}
            data = {data}
            keyExtractor = {(item, index) => {
                    return index.toString();
                }
            }
            numColumns = {2}
            renderItem = {({item}) => {
                    return <SingleNoteSummaryComponent myNoteDate={item.date} myNoteText = {item.text}/>
                }
            }
        />
    </View>
}

const styles = StyleSheet.create({
    viewProperties: {
        marginTop: 50
    },
    listProperties: {
        marginLeft: 10
    },
    buttonProperties:{
        marginTop: 10,
        marginLeft:280
    }
});

export default NotesScreenComponents;