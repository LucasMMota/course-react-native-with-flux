// app/index.js

import React, {Component} from 'react';
import {
    StyleSheet
} from 'react-native';

// Importar o Flux
import {Router, Scene} from 'react-native-router-flux'

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene // Cada Scene é uma tela
                    // Chave que vou usar na tela: Action.scarlet()
                    key="scarlet"
                    // Componente que vou mostrar nessa tela
                    component={ScarletScreen}
                    title="Scarlet"
                />
                <Scene
                    key="gray"
                    component={GrayScreen}
                    title="Gray"
                />
            </Scene>
        </Router>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
});

export default App;