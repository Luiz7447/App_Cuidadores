import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './estilo';

export default function tCadastrarInfo() {

    const navigation = useNavigation();

    function Avancao() {
        navigation.navigate('tCadastrarFoto')
    }

    function Voltar() {
        navigation.goBack()
    }

    return (
        <ImageBackground style={styles.container}>
            <View style={styles.marginTop}>
                <Image style={{ width: 100, height: 109, marginTop: -30 }}
                    source={require('../../assets/logo.png')} />
            </View>

            <View>
                <Text style={styles.title}>Sejam Bem-vindo(a)</Text>
            </View>

            <ScrollView>
                <View style={styles.footer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome Completo"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Data de Nascimento"
                        autoCorrect={false}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="CPF"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Celular"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Endereço"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Cidade"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Estado"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="E-mail"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Senha"
                    />
                </View>
            </ScrollView>

            <View>
                <RectButton style={styles.buttonNext} onPress={Avancao}>
                    <Text style={styles.buttonText}>Avançar</Text>
                </RectButton>
                <RectButton style={styles.buttonReturn} onPress={Voltar}>
                    <Text style={styles.buttonText}>Voltar</Text>
                </RectButton>
            </View>
        </ImageBackground >
    );
}


