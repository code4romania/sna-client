import * as React from 'react';

const style = require('./style.css');

interface Props {
  parentTitle?: string;
  title?: string;
  children?: any;
}

export const ContentHeader = (props: Props) => (
  <div className={style.ContentHeader}>
    <div className={style.parentTitle}>{props.parentTitle}</div>
    <div className={style.title}>{props.title}</div>
  </div>
);

export const CustomContentHeader = (props: Props) => (
  <div className={style.ContentHeader}>
    <div className={style.parentTitle}>{props.parentTitle}</div>
    <div className={style.title}>{props.children}</div>
  </div>
);
