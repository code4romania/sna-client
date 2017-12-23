import * as React from 'react';

const style = require('./style.css');

export const Footer = () => (
  <footer id={style.bottom}>
    <div className={style.container}>
      <a className={style.logo} href="http://code4.ro" target="_blank">
        <img src="//code4.ro/wp-content/uploads/2017/08/logo-bw.png" alt="Code for Romania" />
      </a>
      <p className={style.mono}>
          În colaborare cu Code for Romania.<br/>
          Organizație neguvernamentală independentă, neafiliată politic și apolitică.
      </p>
    </div>
  </footer>
);
