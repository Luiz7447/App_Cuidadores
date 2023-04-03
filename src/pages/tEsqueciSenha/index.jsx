import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './estilo';

export default function tEsquiciSenha() {
    const navigation = useNavigation()

    function Avancao() {
        navigation.navigate('tNovaSenha');
    }

    function Voltar() {
        navigation.goBack()
    }

    return (
        <ImageBackground source style={styles.container}>
            <View style={styles.main}>
                <Image style={{ width: 207, height: 225, marginTop: 10,
                marginLeft: 60 }}
                    source={require('../../assets/logo.png')} />
            </View>

            <View style={styles.main}>

            <Text style={styles.title}>Esqueci minha senha(a)</Text>

            <TextInput/>

                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                />
                
                <Text style={styles.description}>Ou</Text>

                <TextInput/>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu número de Celular"
                    autoCorrect={false}
                />

                <RectButton style={styles.buttonNext} onPress={Avancao}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </RectButton>
                <RectButton style={styles.buttonReturn} onPress={Voltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </RectButton>
            </View>
        </ImageBackground>
    );
}
