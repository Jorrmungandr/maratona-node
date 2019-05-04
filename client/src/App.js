import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';
import Navbar from './components/navbar/navbar.jsx';
import Banner from './components/banner/banner.jsx';
import Info from './components/info/info.jsx';
import Jornada from './components/jornada/jornada.jsx';
import DepoimentosNotícias from './components/depoimentosnews/depoimentosnews.jsx';
import Resultados from './components/resultados/resultados.jsx';
import Parceiros from './components/parceiros/parceiros.jsx';
import Footer from './components/footer/footer.jsx';
import Strapi from 'strapi-sdk-javascript/build/main';

const strapi = new Strapi('http://localhost:1337');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {
        navbars: [],
        banners: [],
        // info: [],
        // jornada: [],
        // depoimentos: [],
        // resultados: [],
        // parceiros: [],
        // footer: [],
      },
    }
  }

  async componentDidMount() {
    let entries;
    try {
      let navbars = await strapi.getEntries('navbars');
      let banners = await strapi.getEntries('banners');
      this.setState({
        posts: {
          navbars,
          banners
          // info: [],
          // jornada: [],
          // depoimentos: [],
          // resultados: [],
          // parceiros: [],
          // footer: [],
        }
      });
    }
    catch (err) {
      alert(err);
    }
  }

  render() {
    return (
      <div>
        <section>
          {this.state.posts.navbars.map(
            (post) => <Navbar info={post.Informação} testimonial={post.Depoimentos} news={post.Notícias} sucess={post.Sucesso} partners={post.Parceiros} />
          )}
          {this.state.posts.banners.map((post) => <Banner title={post.title} content={post.content} />)}
        </section>
        <div>
          <Info />
          <Jornada />
          <DepoimentosNotícias />
          <Resultados />
          <Parceiros />
          <Footer />
        </div>
      </div>
    )
  }
}

export default App;
