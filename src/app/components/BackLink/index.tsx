import * as React from 'react';
import {Link} from 'react-router';

import {MyLocation} from '../../helpers/url_helper';

const style = require('./style.css');

interface Props {
  link: string | MyLocation;
}

export const BackLink = (props: Props) => (
  <div className={style.backLink}>
    <svg width="9px" height="15px" viewBox="-2 -2 9 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <polyline stroke="#516178" strokeWidth="2" strokeLinecap="round" fill="none"
                points="6 0 0 5.8 6 11.6" />
    </svg>
    <Link to={props.link}>Înapoi</Link>
  </div>
);
