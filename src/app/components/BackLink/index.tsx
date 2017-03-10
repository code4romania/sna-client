import * as React from 'react';
import {Link} from 'react-router';

const style = require('./style.css');

interface Props {
  link: string;
}

export const BackLink = (props: Props) => (
  <div className={style.backLink}>
    <Link to={props.link}>Înapoi</Link>
  </div>
);
