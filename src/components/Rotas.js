// importações gerais
import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

// import dos componentes
import Principal from './Principal';
import Sobre from './Sobre';
import Outros from './Outros';
import Resultado from './Resultado';

const Rotas = () => (
    // configuração das rotas
    <Router
     sceneStyle={{paddingTop: 50}}  >
       <Scene key='principal' component={Principal} title='Cara ou Coroa' initial/>
       <Scene key='sobre' component={Sobre} title='Sobre o jogo' />
       <Scene key='outros' component={Outros} title='Outros jogos'/>
       <Scene key='resultado' component={Resultado} title='Resultado'/>
   </Router> 
);

export default Rotas;