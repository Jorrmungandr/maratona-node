import React, { Component } from 'react';
import './depoimentosnews.scss';
import crossedSquare from '../../crossedSquare.png';

class Card extends Component {
  render() {
    return (
      <div>
        <div class="card">
          <h3>"TRECHO DO DEPOIMENTO"</h3>
        </div>
        <p>Maria, aluna de ciência da computação</p>
      </div>
    )
  }
}

class Headline extends Component {
  render() {
    return (
      <div class="headline">
        <h3>MANCHETE</h3>
      </div>
    )
  }
}

export default class DepoimentosNotícias extends Component {
  render() {
    return (
      <div class="testimonials-news">
        <div id="testimonials">
          <h1>Depoimentos</h1>
          <div class="card-container">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div id="news">
          <h1>Notícias</h1>
          <div class="headline-container">
            <Headline />
            <Headline />
            <Headline />
            <Headline />
          </div>
        </div>
      </div>
    )
  }
}