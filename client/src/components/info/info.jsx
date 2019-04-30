import React, { Component } from 'react';
import './info.scss'

class Info extends Component {
  render() {
    return (
      <div id="information">
        <div class="text-container">
          <h1>Título das informações sobre a maratona</h1>
          <p>BREVE INTRODUÇÃO SOBRE A MARATONA Lorem ipsum dolor sit amet et delectus accomodare his consul copiosae legendos at vix ad putent delectus delicata usu. Vidit dissentiet eos cu eum an brute cpiosae hendrerit. Eos erant dolorum an. Per facer affert ut.</p>
        </div>
        <div class="card-container">
          <div class="card">
            <h2>Organização</h2>
            <p>PEQUENO TEXTO QUE LEVE O USUÁRIO A EXPANDIR O BLOCO (terá um texto maior explicando essa área)</p>
            <a>clique</a>
          </div>
          <div class="card">
            <h2>Metodologia</h2>
            <p>PEQUENO TEXTO QUE LEVE O USUÁRIO A EXPANDIR O BLOCO (terá um texto maior explicando essa área)</p>
            <a>clique</a>
          </div>
          <div class="card">
            <h2>Objetivos</h2>
            <p>PEQUENO TEXTO QUE LEVE O USUÁRIO A EXPANDIR O BLOCO (terá um texto maior explicando essa área)</p>
            <a>clique</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Info;