import React, { Component } from 'react';
import './jornada.scss';
import crossedSquare from '../../crossedSquare.png';
import Slider from "react-slick";

class Card extends Component {
  render() {
    return (
      <div>
        <div class="card">
          <div class="text-container">
            <div class="title-wrapper">
              <h1>Ano</h1>
              <h3>Título do ano</h3>
            </div>
            <p>Resumo dos acontecimentos do ano. Resumo dos acontecimentos do ano. Resumo dos acontecimentos do ano. Resumo dos acontecimentos do ano. Resumo dos acontecimentos do ano. </p>
          </div>
          <div class="image-container">
            <img src={crossedSquare} alt="IMAGEM" class="image" />
          </div>
        </div>
      </div>
    )
  }
}

class Jornada extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 800,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div id="journey">
        <div class="text-container">
          <h1>Nossa Jornada</h1>
        </div>
        <Slider {...settings}>
          <Card />
          <Card />
          <Card />
        </Slider>
      </div>
    )
  }
}

export default Jornada;