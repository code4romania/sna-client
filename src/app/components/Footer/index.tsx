import * as React from 'react';

const style = require('./style.css');

export const Footer = () => (
  <div className={style.footer}>
    <a href="http://code4.ro" target="_blank">
      <img className={style.logo} src={require('./brand-code4.png')} />
      <span className={style.byline}>Creat de Code for Romania</span>
    </a>
  </div>
);
