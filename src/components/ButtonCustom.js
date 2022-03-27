import { Text, StyleSheet, TouchableHighlight } from 'react-native'
import React, { Component } from 'react'
import { COLORS } from "../global/colors";

export const ButtonCustom = ({ title, onSubmit }) => {

    return (
        <>
            <TouchableHighlight
                style={styles.submit}
                onPress={onSubmit}
                underlayColor='#fff'>
                <Text style={styles.submitText}>{title ? title : "Submit"}</Text>
            </TouchableHighlight>
        </>
    )

}

const styles = StyleSheet.create({
    submit: {
        width: '70%',
        marginRight: 20,
        marginLeft: 40,
        marginTop: 10,
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: COLORS.backgroundColor,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: COLORS.lineColor,
    },
    submitText: {
        color: 'black',
        textAlign: 'center',
    }

});