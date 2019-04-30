import React, { Component } from 'react';
import './depoimentosnews.scss';
import crossedSquare from '../../crossedSquare.png';

class DepoimentosNotícias extends Component {
  render() {
    return (
      <div class="testimony-news">
        <div id="testimony">
          <h1>Depoimentos</h1>
          <div class="card-container">
            <div class="card">
              <p>"TRECHO DO DEPOIMENTO"</p>
            </div>
            <p>Maria, aluna de ciência da computação</p>
            <div class="card">
              <p>"TRECHO DO DEPOIMENTO"</p>
            </div>
            <p>Maria, aluna de ciência da computação</p>
            <div class="card">
              <p>"TRECHO DO DEPOIMENTO"</p>
            </div>
            <p>Maria, aluna de ciência da computação</p>
          </div>
        </div>
        <div id="news">
          <h1>Notícias</h1>
          <div class="headline-container">
            <div class="headline">
              <h3>MANCHETE</h3>
            </div>
            <div class="headline">
              <h3>MANCHETE</h3>
            </div>
            <div class="headline">
              <h3>MANCHETE</h3>
            </div>
            <div class="headline">
              <h3>MANCHETE</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DepoimentosNotícias;