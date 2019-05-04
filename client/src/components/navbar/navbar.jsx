import React, { Component } from 'react';
import './navbar.scss';
import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://localhost:1337');

export default class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      elementHeights: {},
      posts: [],
    }
  }

  async componentDidMount() {
    const getHeight = (element) => document.querySelector(element).clientHeight;

    let heights = {
      // navbar: getHeight('.navbar') + 20,
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

    //strapi

    try {
      const posts = await strapi.getEntries('navbars')
      this.setState({ posts });
    }
    catch (err) {
      alert(err);
    }
  }

  handleClick(event) {
    let eventClass = event.target.className;
    let height = 0;
    let heightSum = 0;

    Object.entries(this.state.elementHeights).map((each) => {
      each[0] === eventClass ? heightSum = height : height += each[1];
    });

    window.scrollTo(0, heightSum);
  }

  render() {
    return (
      <section>
      {this.state.posts.map((post) => {
        return(
          <div class="navbar" onClick={this.handleClick.bind(this)}>
            <a class="information">{post.Informação}</a>
            <a class="testimonials">{post.Depoimentos}</a>
            <a class="testimonials">{post.Notícias}</a>
            <a class="sucess">{post.Sucesso}</a>
            <a class="partners">{post.Parceiros}</a>
          </div>
        )
      })}
    </section>
    )
  }
} 