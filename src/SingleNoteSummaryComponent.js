import React from 'react';
import {Text, View, StyleSheet} from 'react-native'

const SingleNoteSummaryComponent = (props) => {
    return <View 
        //backgroundColor={randombg()} 
        style={styles.textViewStyle}>
        <Text style={styles.dateProperties}> {props.myNoteDate.toDateString()} </Text>
        <Text style={styles.textProperties}> {props.myNoteText} </Text>
    </View>
}

const styles = StyleSheet.create({
    'dateProperties': {
        color: "#fff",
        fontStyle: "italic",
        fontSize: 16,
        padding: 5,
        backgroundColor: 'rgb(50, 50, 50)'
    },
    'textProperties': {
        color: "#000",
        fontSize: 15,
        padding: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    'textViewStyle': {
        height: 140,
        width: 140,
        borderLeftWidth: 1,
        borderBottomWidth: 1,
        borderRightWidth: 1,
        borderColor: '#000',
        margin: 10,
        marginRight: 25,
        backgroundColor: 'rgb(250, 250, 240)',
        borderRadius: 30
    }
});

// const randombg =() => {
//     var red = Math.floor(Math.random() * 255)
//     var green = Math.floor(Math.random() * 255)
//     var blue = Math.floor(Math.random() * 255)
//     return `rgb(${red}, ${green}, ${blue})`
// }

export default SingleNoteSummaryComponent;