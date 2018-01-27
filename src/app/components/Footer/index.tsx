import * as React from 'react';

const style = require('./style.css');

export const Footer = () => (
  <footer>
    <div>
      <a href="http://sna.code4.ro/">
        <img id={style.sna_footer_logo} className={style.logo} src={require('./brand-sna.svg')}
          title="Strategia Națională Anticorupție - Vizualizare Date"
          alt="Strategia Națională Anticorupție - Vizualizare Date"/>
      </a>
    </div>
    <div id={style.code4_footer_logo_wrapper}>
      <a href="https://code4.ro/">
        <img id={style.code4_footer_logo} className={style.logo} src={require('./brand-code4.png')}
          title="Code for Romania" alt ="Code for Romania" />
      </a>
    </div>
    <p>Un proiect realizat de Code for Romania.</p>
    <p>Organizație neguvernamentală independentă, neafiliată politic și apolitică.</p>
  </footer>
);
