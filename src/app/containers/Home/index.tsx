import * as React from 'react';
const style = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {
    // const map: CountyColorMap = {
    //   arad: 'red', bihor: 'white', alba: '#cfe1f6',
    // };
    return (
      <div className={style.Home}>
        <div className="title">
          Prezentare indicatori SNA
        </div>
        Home
        {/*<RomaniaMap width={500} colorMap={map} />*/}

      </div>
    );
  }
}

export { Home }
