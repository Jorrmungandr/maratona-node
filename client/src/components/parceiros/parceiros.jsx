import React, { Component } from 'react';
import './parceiros.scss';
import crossedSquare from '../../crossedSquare.png';

export default class Parceiros extends Component {
  render() {
    return (
      <div id="partners">
        <div class="text-container">
          <h1>Nossos Parceiros</h1>
          <h3>Texto de Agradecimento aos atuais patrocinadores e atrativo para novos investidores.</h3>
        </div>
        <div class="image-container">
          <img src={crossedSquare} alt="IMAGEM" class="image"/>
          <img src={crossedSquare} alt="IMAGEM" class="image"/>
          <img src={crossedSquare} alt="IMAGEM" class="image"/>
          <img src={crossedSquare} alt="IMAGEM" class="image"/>
        </div>
      </div>
    )
  }
}