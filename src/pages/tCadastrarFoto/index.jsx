import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import Routes2 from '../../routes2';
import styles from './estilo';


export default function tCadastrarFoto() {

    const navigation = useNavigation();
    function Avancao() {
        navigation.navigate('Routes2')
    }

    function Voltar() {
        navigation.goBack()
    }

    return (
        <ImageBackground source={require('../../assets/home-background.png')}
            style={styles.container}
            imageStyle={{ width: 274, height: 368 }}>

            <View style={styles.main}>
                <Text style={styles.title}>Selecione sua melhor foto</Text>
            </View>

            <RectButton style={styles.button} onPress={Avancao}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </RectButton>
            <RectButton style={styles.buttonReturn} onPress={Voltar}>
                <Text style={styles.buttonText}>Voltar</Text>
            </RectButton>
        </ImageBackground>
    );
}
