import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput, Button } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './estilo';

export default function tFavoritos(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pagina Favoritos</Text>
        </View>
    );
}