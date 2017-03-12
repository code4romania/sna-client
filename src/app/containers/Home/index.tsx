import * as React from 'react';
import {ContentHeader} from '../../components/ContentHeader/index';
const style = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {
    // const map: CountyColorMap = {
    //   arad: 'red', bihor: 'white', alba: '#cfe1f6',
    // };
    return (
      <div className={style.Home}>
        <ContentHeader title="Prezentare indicatori SNA"/>

        Home
        {/*<RomaniaMap width={500} colorMap={map} />*/}

      </div>
    );
  }
}

export { Home }
