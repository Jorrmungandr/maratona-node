import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

class Navbar extends Component{
  render(){
    return(
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

class Page extends Component {
  constructor(props) {
    super(props) 
  }

  render(){
    return(
      <Navbar />
    )
  }
}
export default Page;
