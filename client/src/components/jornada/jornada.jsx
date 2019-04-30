import React, { Component } from 'react';
import './jornada.scss';
import crossedsquare from '../../crossedsquare.png';

class Jornada extends Component {
  render() {
    return (
      <div id="journey">
        <h1>Nossa Jornada</h1>
        <div class="navigation-menu">
          <div class="arrow left-arrow">volte</div>
          <div class="history-line">
            <div class="text-container">
              <div class="title-wrapper">
                <h1>Ano</h1>
                <h3>Título do ano</h3>
              </div>
              <p>Resumo dos acontecimentos do ano. Resumo dos acontecimentos do ano. Resumo dos acontecimentos do ano. Resumo dos acontecimentos do ano. Resumo dos acontecimentos do ano. </p>
            </div>
            <div class="image-container">
              <img src={crossedsquare} alt="IMAGEM" class="image" />
            </div>
          </div>
          <div class="arrow right-arrow">passe</div>
        </div>
      </div>
    )
  }
}

export default Jornada;