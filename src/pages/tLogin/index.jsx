import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, SafeAreaView, Linking, TouchableOpacity } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import tEsquiciSenha from '../tEsqueciSenha';
import tSelecaoUsuario from '../tSelecaoUsuario';
import tPesquisa from '../tPesquisa';
import Routes2 from '../../routes2';
import styles from './estilo';

export default function tLogin() {

    const navigation = useNavigation()

    function Avancao() {
        navigation.navigate('Routes2')
    }
    function Esqueci() {
        navigation.navigate('tEsqueciSenha');
    }
    function Criar() {
        navigation.navigate('tSelecaoUsuario');
    }

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.main}>
                <Image style={{ width: 207, height: 225, marginTop: 200, marginLeft: 60 }}
                    source={require('../../assets/logo.png')} />
            </View>

            <View style={styles.footer}>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu email"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    autoCorrect={false}
                />

                <RectButton style={styles.button} onPress={Avancao}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </RectButton>
            </View>

            <View style={styles.main}>
                <Text style={styles.title}>Esqueci sua senha?
                <TouchableOpacity onPress={Esqueci}>
                        <Text style={styles.hyperlinkStyle}>Clique aqui</Text>
                    </TouchableOpacity>
                </Text>

                <Text style={styles.title}>Não possui uma conta?
                    <RectButton onPress={Criar}>
                        <Text style={styles.hyperlinkStyle}>Clique aqui</Text>
                    </RectButton>
                </Text>
            </View>
        </ImageBackground>
    );
}

