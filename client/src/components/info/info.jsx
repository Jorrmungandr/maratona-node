import React, { Component } from 'react';
import './info.scss'

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div class="card" onClick={this.props.onClick}>
        <h2>Organização</h2>
        <p>PEQUENO TEXTO QUE LEVE O USUÁRIO A EXPANDIR O BLOCO (terá um texto maior explicando essa área)</p>
        <a>clique</a>
      </div>
    )
  }
}

export default class Info extends Component {
  constructor(props) {
    super(props);
  }

  handleClick(event) {
    event.target.style.width = '30%';
    console.log(event.target);
  }

  render() {
    return (
      <div id="information">
        <div class="text-container">
          <h1>Título das informações sobre a maratona</h1>
          <p>Breve introdução sobre a maratona. Breve introdução sobre a maratona. Breve introdução sobre a maratona. Breve introdução sobre a maratona. Breve introdução sobre a maratona. Breve introdução sobre a maratona. Breve introdução sobre a maratona. </p>
        </div>
        <div class="card-container">
          <Card onClick={this.handleClick.bind(this)}/>
          <Card onClick={this.handleClick.bind(this)}/>
          <Card onClick={this.handleClick.bind(this)}/>
        </div>
      </div>
    )
  }
}