import * as React from 'react';
import * as Helmet from 'react-helmet';
import { Header, Sidebar, Content } from 'components';

const appConfig = require('../../../../config/main');
const style = require('./style.css');

class App extends React.Component<any, any> {
  public render() {
    return (
      <section className={style.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        <div className={style.body}>
          <Sidebar />
          <Content>
            {this.props.children}
          </Content>
        </div>
      </section>
    );
  }
}

export { App }
