import React, { Component } from 'react';
import './banner.scss';

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

export default Banner;