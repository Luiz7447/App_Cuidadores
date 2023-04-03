import React from 'react';
import { View, StyleSheet, StatusBar, SafeAreaView, ImageBackground, TextInput, } from "react-native";
import { Text } from 'react-native-web';

function CardUsuario({ usuario }) {
    return (
        <View style={styles.view}>
            <Text>{usuario.nome}</Text>
            <Text>{usuario.data_de_nasc}</Text>
            <Text>{usuario.email}</Text>
            <Text>{usuario.celular}</Text>
        </View>
    );
}

export default CardUsuario;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F5'
    },

    view: {
        padding: 5,
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 15,
    },
});