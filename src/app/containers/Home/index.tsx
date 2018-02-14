import * as React from 'react';
import {ContentHeader} from '../../components/ContentHeader/index';
const style = require('./style.css');

export class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={'container ' + style.Home}>
        <ContentHeader title='Prezentarea indicatorilor Strategiei Naționale Anticorupție'/>
        <div className={'row col-xs-12 ' + style.main}>
          <img src={require('./intro.png')} />
        </div>
      </div>
    );
  }
}
