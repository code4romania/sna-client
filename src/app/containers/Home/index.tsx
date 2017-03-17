import * as React from 'react';
import {ContentHeader} from '../../components/ContentHeader/index';
const style = require('./style.css');

export class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Home}>
        <ContentHeader title="Prezentare indicatori SNA"/>
        <div className={style.main}>
          <img src={require('./intro.png')} />
        </div>
      </div>
    );
  }
}
