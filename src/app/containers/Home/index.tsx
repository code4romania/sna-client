import * as React from 'react';
const style = require('./style.css');

class Home extends React.Component<any, any> {
  public render() {
    return (
      <div className={style.Home}>
        <p>Hello!</p>
      </div>
    );
  }
}

export { Home }
