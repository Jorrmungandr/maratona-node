import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/navbar.jsx';
import Banner from './components/banner/banner.jsx';
import Info from './components/info/info.jsx';
import Jornada from './components/jornada/jornada.jsx';
import DepoimentosNotícias from './components/depoimentosnews/depoimentosnews.jsx';
import Resultados from './components/resultados/resultados.jsx'

class App extends Component {
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

export default App;
