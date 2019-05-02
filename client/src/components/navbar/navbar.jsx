import React, { Component } from 'react';
import './navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <div class="navbar">
        <a>O que somos?</a>
        <a>Jornada</a>
        <a>Depoimentos</a>
        <a>Notícias</a>
        <a>Resultados</a>
        <a>Parceiros</a>
      </div>
    )
  }
}

export default Navbar;