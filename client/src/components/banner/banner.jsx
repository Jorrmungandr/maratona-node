import React, { Component } from 'react';
import './banner.scss';
import crossedSquare from '../../crossedSquare.png';

export default class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <div class="text-container">
          <img src={crossedSquare} alt="LOGO" class="image"/>
          <h1>Título Introdutório</h1>
          <p>Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. </p>
        </div>
        <div class="image-container">
          <img src={crossedSquare} alt="IMAGEM" class="image"/>
        </div>
      </div>
    )
  }
}