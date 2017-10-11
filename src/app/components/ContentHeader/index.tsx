import * as React from 'react';

const style = require('./style.css');

interface Props {
  parentTitle?: string;
  title?: string;
  children?: any;
}

export const ContentHeader = (props: Props) => (
    <div className={'row ' + style.ContentHeader}>
      <div className={'col-xs-12 ' + style.parentTitle}>{props.parentTitle}</div>
      <div className={'col-xs-12 ' + style.title}>{props.title}</div>
      <div className={style.divider} />
    </div>
);

export const CustomContentHeader = (props: Props) => (
    <div className={'row ' + style.ContentHeader}>
      <div className={'col-xs-12 ' + style.parentTitle}>{props.parentTitle}</div>
      <div className={'col-xs-12 ' + style.title}>{props.children}</div>
      <div className={style.divider} />
    </div>
);
