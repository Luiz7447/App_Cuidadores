import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './estilo';

export default function tSelecaoUsuario() {

    const navigation = useNavigation();

    function Avancao() {
        navigation.navigate('tCadastrarInfo')
    }

    function Voltar() {
        navigation.goBack()
    }

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.main}>
                <Image style={{ width: 250, height: 274, marginTop: 200,
                marginLeft: 38 }}
                    source={require('../../assets/logo.png')} />
            </View>

            <View style={styles.main}>
                <RectButton style={styles.buttonNext} onPress={Avancao}>
                    <Text style={styles.buttonText}>Você é uma Babá?</Text>
                </RectButton>

                <Text style={styles.description}>Ou</Text>
                <RectButton style={styles.buttonNext} onPress={Avancao}>
                    <Text style={styles.buttonText}>Você deseja contratar uma Babá</Text>
                </RectButton>


                <RectButton style={styles.buttonReturn} onPress={Voltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </RectButton>
            </View>
        </ImageBackground>
    );
}
