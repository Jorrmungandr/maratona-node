import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <a>Parceiros</a>
        <a>Resultados</a>
        <a>Notícias</a>
        <a>Depoimentos</a>
        <a>Jornada</a>
        <a>O que somos?</a>
      </div>
    )
  }
}

class Banner extends Component {
  render() {
    return (
      <div id="banner">
        <div class="text-container">
          <img src="#" alt="LOGO" />
          <h1>Título Introdutótio</h1>
          <p>PEQUENO TEXO QUE DÁ CONTINIDADE AO TÍTULO. Lorem ipsum dolor sit amet et delectus accomodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute cpiosae hendrerit. Eos erant dolorum an. Per facer affert ut. Mei iisque mentitum moderatius cu. Sit munenre facilis accusam eu dicat falli consulatu at vis. Te facilisis mnesarchum qui poss omnium mediocritatem est cu.</p>
        </div>
        <div class="image-container">
          <img src="#" alt="IMAGEM" id="image" />
        </div>
      </div>
    )
  }
}

class Page extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <Navbar />
        <Banner />
      </div>
    )
  }
}
export default Page;
