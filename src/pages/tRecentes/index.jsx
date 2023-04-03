import React, { useState } from 'react';
import { View, Image, ImageBackground, StyleSheet, Text, TextInput } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './estilo';

export default function tRecentes(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Pagina Recentes</Text>
        </View>
    );
}

