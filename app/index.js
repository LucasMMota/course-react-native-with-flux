// app/index.js

import React, {Component} from 'react';
import {
    StyleSheet,
    Text
} from 'react-native';

// Importar o Flux
import {Router, Scene} from 'react-native-router-flux'

import ScarletScreen from './ScarletScreen';
import GrayScreen from './GrayScreen';

import BlueScreen from './BlueScreen';
import MaizeScreen from './MaizeScreen';

import BlackScreen from './BlackScreen';
import GoldScreen from './GoldScreen';

import ModalScreen from './ModalScreen';

const TabIcon = ({selected, title}) => {
    return (
        <Text style={{color: selected ? 'red' : 'black'}}>{title}</Text>
    )
}

const App = () => {
    return (
        <Router>
            <Scene key="root">
                <Scene
                    key="tabbar"
                    tabs
                    tabBarStyle={{backgroundColor: '#FFF'}}
                >

                    <Scene key='osu' title='OSU' icon={TabIcon}>


                        <Scene // Cada Scene é uma tela
                            // Chave que vou usar na tela:
                            // Actions.[KEY]
                            // Action.scarlet()
                            key="scarlet"
                            // Componente que vou mostrar nessa tela
                            component={ScarletScreen}
                            title="Scarlet"
                            initial
                        />
                        <Scene
                            key="gray"
                            component={GrayScreen}
                            title="Gray"
                        />
                    </Scene>

                    <Scene key='um' title='UM' icon={TabIcon}>
                        <Scene
                            key="blue"
                            component={BlueScreen}
                            title="Blue"
                            initial
                        />
                        <Scene
                            key="maize"
                            component={MaizeScreen}
                            title="Maize"
                        />
                    </Scene>

                    <Scene key='vu' title='VU' icon={TabIcon}>
                        <Scene
                            key="gold"
                            component={GoldScreen}
                            title="Gold"
                            initial
                        />
                        <Scene
                            key="black"
                            component={BlackScreen}
                            title="Black"
                        />
                    </Scene>

                </Scene>
                <Scene
                    key="modal"
                    component={ModalScreen}
                    title="Modal"
                    direction="vertical"
                    hideNavBar
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