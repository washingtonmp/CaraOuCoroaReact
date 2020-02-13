//importes importantes
import {Actions} from 'react-native-router-flux';
import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight } from 'react-native';

// import de imagens 
const logo = require('../imgs/logo.png');
const btnJogar = require('../imgs/botao_jogar.png');
const btnSobre = require('../imgs/sobre_jogo.png');
const btnOutrosJogos = require('../imgs/outros_jogos.png');

export default class Principal extends Component{
  render(){
    return(
      <View style={styles.cenaPrincipal}>
          <View style={styles.apresentacaoJogo}>
              <Image source ={logo}/> 

               {/*botão para mudança de cena resultado*/}
               <TouchableHighlight
                  onPress={()=>{Actions.resultado();}}>
                    <Image style={styles.btnJogar} source ={btnJogar}/> 
              </TouchableHighlight>  

               
              
          </View>
          <View style={styles.rodape} >

              {/*botão para mudança de cena sobre*/}
              <TouchableHighlight
                onPress={()=>{Actions.sobre();}}>
                  <Image source ={btnSobre}/> 
              </TouchableHighlight>

              {/*botão para mudança de cena outros jogos*/}
              <TouchableHighlight
                 onPress={()=>{Actions.outros();}}>
                  <Image source ={btnOutrosJogos}/>   
              </TouchableHighlight>  
              
          </View>
      </View>
    );
  }

}

const styles = StyleSheet.create({
    cenaPrincipal:{
      flex: 1,
      backgroundColor:'#61BD8C'
    },
    apresentacaoJogo:{
      flex: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnJogar: {
      marginTop: 20
    },
    rodape:{
      flex: 2,
      justifyContent: 'space-between',
      flexDirection:'row'
    }
 
});


