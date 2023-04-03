import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import CardUsuario from '../../components/CardUsuario/CardUsuario';

function ListaDeUsuarios() {

    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch("https://localhost:44396/api/cuidadores", {
            method: "GET",
        })
            .then((response) => response.json())
            .then((json) => {
                setUsuarios(json);
            })
            .catch((error) => {
                console.log(error);
                alert("Erro ao buscar usuários");
            });
    }, []);

    return (
        <View>
            {
                usuarios.map((usuario, index) => (
                    <CardUsuario usuario={usuario} key={index} />
                ))
            }
        </View>
    );
}

export default ListaDeUsuarios;
