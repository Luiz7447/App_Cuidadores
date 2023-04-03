import React, { useState } from "react";
import { View, Text, StyleSheet, StatusBar, SafeAreaView, ImageBackground, TextInput, } from "react-native";
import { Ionicons } from "react-native-vector-icons";
import ListaDeUsuarios from "../ListaDeUsuarios/ListaDeUsuarios";

export default function tPesquisa() {

    const [text, setText] = useState("");

    return (
        <ImageBackground style={styles.container}>
            <SafeAreaView style={styles.view}>
                <View style={styles.cabecalho}>
                    <Ionicons
                        name="chevron-back"
                        size={40}
                        color="black"
                        onPress={() => { }}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Pesquisar"
                        autoCapitalize="none"
                        autoCorrect={false}
                        value={text}
                        onChangeText={(value) => setText(value)}
                    />
                    <Ionicons
                        name="search"
                        size={40}
                        color="black"
                        onPress={() => { }}
                    />
                </View>
            </SafeAreaView>

            <View style={styles.container}>
                <ListaDeUsuarios />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F0F5'
    },

    view: {
        marginTop: StatusBar.currentHeight,
    },

    cabecalho: {
        flexDirection: "row",
        justifyContent: "space-between",
    },

    input: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 25,
        fontSize: 20,
        paddingHorizontal: 20,
    },
});