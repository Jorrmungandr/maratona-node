import React, { Component } from 'react';
import './resultados.scss';
import crossedsquare from '../../crossedsquare.png';

class Resultados extends Component {
  render() {
    return (
      <div class="results">
        <div class="text-container">
          <h1>Resultados</h1>
          <h3>TEXTO LEGITIMANDO OS RESULTADOS DA MARATONA E INTRODUZINDO O SUCESSO DOS EX PARTICIPANTES</h3>
        </div>
        <div class="navigation-menu">
          <div class="arrow left-arrow">volte</div>
          <div class="gallery">
            <img src={crossedsquare} alt="IMAGEM" class="image" />
            <img src={crossedsquare} alt="IMAGEM" class="image" />
            <img src={crossedsquare} alt="IMAGEM" class="image" />
            <img src={crossedsquare} alt="IMAGEM" class="image" />
          </div>
          <div class="arrow right-arrow">passe</div>
        </div>
      </div>
    )
  }
}

export default Resultados;