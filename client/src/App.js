import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/navbar.jsx';
import Banner from './components/banner/banner.jsx';
import Info from './components/info/info.jsx'

class Jornada extends Component {
  render() {
    return (
      <div id="journey">
        <h1>Nossa Jornada</h1>
        <div class="navigation-menu">
          <div class="arrow left-arrow">volte</div>
          <div class="history-line">
            <div class="text-container">
              <div class="title-wrapper">
                <h1>Ano</h1>
                <h3>Título do ano</h3>
              </div>
              <p>RESUMO DOS ACONTECIMENTOS DO ANO Lorem ipsum dolor sit amet et delectus accomodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit disse</p>
            </div>
            <div class="image-container">
              <img src="#" alt="IMAGEM" id="image" />
            </div>
          </div>
          <div class="arrow right-arrow">passe</div>
        </div>
      </div>
    )
  }
}

class DepoimentosNotícias extends Component {
  render() {
    return (
      <div class="testimony-news">
        <div id="testimony">
          <h1>Depoimentos</h1>
          <div class="card-container">
            <div class="card">
              <p>"TRECHO DO DEPOIMENTO"</p>
              <a>clique</a>
            </div>
            <p>Maria, aluna de ciência da computação</p>
            <div class="card">
              <p>"TRECHO DO DEPOIMENTO"</p>
              <a>clique</a>
            </div>
            <p>Maria, aluna de ciência da computação</p>
            <div class="card">
              <p>"TRECHO DO DEPOIMENTO"</p>
              <a>clique</a>
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

class Resultados extends Component {
  render() {
    return (
      <div class="results">
        <div class="text-container">
          <h1>Resultados</h1>
          <h3>TEXTO LEGITIMANDO OS RESULTADOS DA MARATONA E INTRODUZINDO O SUCESSO DOS EX PARTICIPANTES</h3>
        </div>
        <div class="navigation-menu">
          <div class="arrow left-arrow">volte</div>
          <div class="gallery">
            <img src="#" alt="IMAGEM" id="image" />
            <img src="#" alt="IMAGEM" id="image" />
            <img src="#" alt="IMAGEM" id="image" />
            <img src="#" alt="IMAGEM" id="image" />
          </div>
          <div class="arrow right-arrow">passe</div>
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
        <Info />
        <Jornada />
        <DepoimentosNotícias />
        <Resultados />
      </div>
    )
  }
}
export default Page;
