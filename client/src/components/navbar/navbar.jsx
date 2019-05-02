import React, { Component } from 'react';
import './navbar.scss';

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementHeights: {},
    }
  }

  componentDidMount() {
    const getHeight = (element) => document.querySelector(element).clientHeight;

    let heights = {
      navbar: getHeight('.navbar') + 20,
      banner: getHeight('#banner'),
      information: getHeight('#information') + 40,
      journey: getHeight('#journey'),
      testimonials: getHeight('.testimonials-news'),
      sucess: getHeight('.results'),
      partners: getHeight('#partners')
    }

    this.setState({
      elementHeights: heights,
    })
  }

  handleClick(event) {
    let eventClass = event.target.className;
    let height = 0;
    let heightSum = 0;

    Object.entries(this.state.elementHeights).map((each) => {
      if (each[0] === eventClass) {
        heightSum = height;
      } else height += each[1];
    });

    window.scrollTo(0, heightSum);
  }

  render() {
    return (
      <div class="navbar" onClick={this.handleClick.bind(this)}>
        <a class="information">O que somos?</a>
        <a class="testimonials">Depoimentos</a>
        <a class="testimonials">Notícias</a>
        <a class="sucess">Sucesso</a>
        <a class="partners">Parceiros</a>
      </div>
    )
  }
} 