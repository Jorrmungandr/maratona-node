import React, { Component } from 'react';
import './navbar.scss';

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

export default Navbar;