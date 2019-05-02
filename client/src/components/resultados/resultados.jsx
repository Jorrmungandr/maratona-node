import React, { Component } from 'react';
import './resultados.scss';
import crossedSquare from '../../crossedSquare.png';
import Slider from 'react-slick';

export default class Resultados extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div class="results">
        <div class="text-container">
          <h1>Resultados</h1>
          <h3>TEXTO LEGITIMANDO OS RESULTADOS DA MARATONA E INTRODUZINDO O SUCESSO DOS EX PARTICIPANTES</h3>
        </div>
        <div id="slider">
          <Slider {...settings}>
            <div>
              <img src={crossedSquare} alt="IMAGEM" class="image" />
            </div>
            <div>
              <img src={crossedSquare} alt="IMAGEM" class="image" />
            </div>
            <div>
              <img src={crossedSquare} alt="IMAGEM" class="image" />
            </div>
          </Slider>
        </div>
      </div>
    )
  }
}