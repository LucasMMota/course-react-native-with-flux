// app/GoldScreen.js

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {Actions} from "react-native-router-flux";

const GoldScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.welcome}
                  onPress={() => Actions.black()}>
                Scarlet Screen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#666008',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
        color: '#ffffff',
    },
});

export default GoldScreen;