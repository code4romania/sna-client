import * as React from 'react';
import { Link } from 'react-router';

const style = require('./style.css');

export const Header = () => (
  <nav className={style.Nav}>
    <div className={style.Logo}>
      <Link to="/"><img src={require('./logo.png')} /></Link>
      <span>Portalul Strategiei Naționale Anticorupție</span>
    </div>

    <ul>
      <li><Link to="about">Despre aplicație</Link></li>
      <li><Link to="help">Ajutor</Link></li>
    </ul>
  </nav>
);
