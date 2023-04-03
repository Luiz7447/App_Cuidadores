import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import tCadastrarFoto from './pages/tCadastrarFoto';
import tCadastrarInfo from './pages/tCadastrarInfo';
import tEsqueciSenha from './pages/tEsqueciSenha';
import tLogin from './pages/tLogin/index';
import tNovaSenha from './pages/tNovaSenha';
import tSelecaoUsuario from './pages/tSelecaoUsuario';
import Routes2 from './routes2';

const AppStack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <AppStack.Navigator headerMode="none" screenOptions={{
                cardStyle: { backgroundColor: '#F0F0F5' }
            }}>
                <AppStack.Screen name="tLogin" component={tLogin} />
                <AppStack.Screen name="tCadastrarFoto" component={tCadastrarFoto} />
                <AppStack.Screen name="tCadastrarInfo" component={tCadastrarInfo} />
                <AppStack.Screen name="tEsqueciSenha" component={tEsqueciSenha} />
                <AppStack.Screen name="tNovaSenha" component={tNovaSenha} />
                <AppStack.Screen name="tSelecaoUsuario" component={tSelecaoUsuario} />
                <AppStack.Screen name="Routes2" component={Routes2} />

            </AppStack.Navigator>
        </NavigationContainer>
    );
}



