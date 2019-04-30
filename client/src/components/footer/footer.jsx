import React, { Component } from 'react';
import './footer.scss';
import crossedSquare from '../../crossedSquare.png';

class Link extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="link-container">
        <a href={this.props.href}>{this.props.linkName}</a>
      </div>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <div class="footer">
        <div class="study">
          <div class="text-container">
            <h3>Links com materiais de estudo</h3>
          </div>
          <div class="study-links">
            <Link href="#" linkName="link" />
            <Link href="#" linkName="link" />
            <Link href="#" linkName="link" />
            <Link href="#" linkName="link" />
          </div>
        </div>
        <div class="contact">
          <div class="text-container">
            <h3>Informações de Contato</h3>
          </div>
          <div class="contact-links">
            <Link href="#" linkName="link" />
            <Link href="#" linkName="link" />
            <Link href="#" linkName="link" />
          </div>
        </div>
      </div>
    )
  }
}

export default Footer;