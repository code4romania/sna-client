import * as React from 'react';
import {Link} from 'react-router';

const style = require('./style.css');

interface Props {
  link: string;
}

export const BackLink = (props: Props) => (
  <div className={style.backLink}>
    <svg width="9px" height="15px" viewBox="-2 -2 9 15" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <polyline stroke="#516178" strokeWidth="2" strokeLinecap="round" fill="none"
              points="5.99108798 0 0 5.78999996 5.99108798 11.5799999" />
    </svg>
    <Link to={props.link}>Înapoi</Link>
  </div>
);
