import * as React from 'react';
import * as Helmet from 'react-helmet';
const {connect} = require('react-redux');
import {Dispatch} from 'react-redux';

import {Header, Content, Footer, Loader} from 'components';
import {ApplicationState} from '../../redux/application_state';
import {DispatchProps} from '../../components/Section/filters';

const appConfig = require('../../../../config/main');

export const commonStyle = require('./style.css');

interface AppProps {
  sidebar: JSX.Element;
  main: JSX.Element;
}

@connect(
  null,
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
class App extends React.Component<AppProps & DispatchProps, any> {
  constructor(props) {
    super(props);
  }

  public render() {
    const {main, sidebar} = this.props;

    return (
      <section className={commonStyle.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        <div className={commonStyle.body}>
          {sidebar}
          <Content>
            {main || this.props.children}
            <Footer />
          </Content>
        </div>
        <Loader />
      </section>
    );
  }
}

export {App};
