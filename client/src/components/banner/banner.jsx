import React, { Component } from 'react';
import './banner.scss';
import crossedsquare from '../../crossedsquare.png';

class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <div class="text-container">
          <img src={crossedsquare} alt="LOGO" class="image"/>
          <h1>Título Introdutótio</h1>
          <p>Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. Pequeno texto que dá continuidade ao título. </p>
        </div>
        <div class="image-container">
          <img src={crossedsquare} alt="IMAGEM" class="image"/>
        </div>
      </div>
    )
  }
}

export default Banner;