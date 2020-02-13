
// importações gerais
import React, { Component } from 'react';
import { StyleSheet, Text } from 'react-native';

export default class Sobre extends Component{
  render(){
        return(
            <Text style={styles.texto}>
                Aqui podem ser apresentadas informações sobre o jogo 
            </Text>
        );
    }
}

const styles = StyleSheet.create({
    texto:{
      flex: 1,
      backgroundColor:'#61BD8C'

    }
});


