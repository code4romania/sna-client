import * as React from 'react';
import * as Helmet from 'react-helmet';

import { Header, Sidebar, Content } from 'components';
import {ApplicationState} from '../../redux/application_state';

const { connect } = require('react-redux');

const appConfig = require('../../../../config/main');
const style = require('./style.css');

interface AppProps {
  location: Location;
  sidebar: JSX.Element;
  main: JSX.Element;
}

@connect(
  (state: ApplicationState) => ({ location: state.routing.locationBeforeTransitions }),
)
class App extends React.Component<AppProps, any> {
  public render() {
    const {main} = this.props;
    let {sidebar} = this.props;

    if (!sidebar) {
      sidebar = <Sidebar />;
    }

    return (
      <section className={style.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        <div className={style.body}>
          {sidebar}
          <Content>
            {main || this.props.children}
          </Content>
        </div>
      </section>
    );
  }
}

export { App }
