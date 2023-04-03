import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './estilo';

export default function tNovaSenha() {
    const navigation = useNavigation()

    function Avancao() {
        navigation.navigate('tLogin');
    }
    function Voltar() {
        navigation.goBack()
    }
    return (
        <ImageBackground style={styles.container}>
            <View style={styles.main}>
                <Image style={{
                    width: 207, height: 225, marginTop: 10,
                    marginLeft: 60
                }}
                    source={require('../../assets/logo.png')} />
            </View>

            <TextInput />

            <View style={styles.main}>

                <Text style={styles.title}>Redefinir minha senha(a)</Text>

                <TextInput/>

                <TextInput
                    style={styles.input}
                    placeholder="Digite a nova Senha"
                />

                <TextInput/>

                <Text style={styles.description}>&</Text>

                <TextInput/>

                <TextInput
                    style={styles.input}
                    placeholder="Confirmar senha"
                    autoCorrect={false}
                />

                <TextInput/>

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