import React, {useState} from 'react'
import {Button, StyleSheet, TextInput, View} from 'react-native';
import firebase from 'firebase';

const CreateNoteComponent = (props) => {

    const [newNoteText, setNewNoteText] = useState('')

    return <View>
        <TextInput 
            style={styles.textInputStyles}
            autoCorrect={false}
            autoCapitalize="none"
            multiline={true}
            value={newNoteText}
            onChangeText={(currentText) => setNewNoteText(currentText)}
        />
        <Button 
            title={"Create Note"}
            onPress = {() => {
                //props.onCreateButtonPress(newNoteText)
                const UserId = firebase.auth().currentUser.uid
                const PathofData = `/users/${UserId}/`
                firebase.database()
                    .ref(PathofData)
                    .push({'date': new Date().toDateString(), 'text': newNoteText})
                setNewNoteText('')
            }}
        />
    </View>
}

const styles = StyleSheet.create({
    textInputStyles: {
        borderWidth: 5,
        width: 360,
        height:140,
        padding: 20,
        borderRadius: 15,
        textAlignVertical:"top",
        marginTop: 15
    }
});

export default CreateNoteComponent;