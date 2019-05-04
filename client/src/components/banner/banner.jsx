import React, { Component } from 'react';
import './banner.scss';
import crossedSquare from '../../crossedSquare.png';
import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://localhost:1337');

export default class Banner extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="banner">
        <div class="text-container">
          <img src={crossedSquare} alt="LOGO" class="image" />
          <h1>{this.props.title}</h1>
          <p>{this.props.content}</p>
        </div>
        <div class="image-container">
          <img src={crossedSquare} alt="IMAGEM" class="image" />
        </div>
      </div>
    )
  }
}