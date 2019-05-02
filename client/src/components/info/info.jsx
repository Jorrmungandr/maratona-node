import React, { Component } from 'react';
import './info.scss'

class Card extends Component {
  render() {
    return (
      <div class="card">
        <h2>Organização</h2>
        <p>PEQUENO TEXTO QUE LEVE O USUÁRIO A EXPANDIR O BLOCO (terá um texto maior explicando essa área)</p>
        <a>clique</a>
      </div>
    )
  }
}

export default class Info extends Component {
  render() {
    return (
      <div id="information">
        <div class="text-container">
          <h1>Título das informações sobre a maratona</h1>
          <p>Breve introdução sobre a maratona. Breve introdução sobre a maratona. Breve introdução sobre a maratona. Breve introdução sobre a maratona. Breve introdução sobre a maratona. Breve introdução sobre a maratona. Breve introdução sobre a maratona. </p>
        </div>
        <div class="card-container">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    )
  }
}