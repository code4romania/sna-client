import * as React from 'react';
import * as Helmet from 'react-helmet';
const {connect} = require('react-redux');
import {Dispatch} from 'react-redux';

import {Header, Sidebar, Content} from 'components';
import {ApplicationState} from '../../redux/application_state';
import {openSidebar} from '../../redux/reducers';
import {CollapseSidebarButton} from '../../components/CollapseSidebarButton/index';
import {DispatchProps} from '../../components/Section/filters';
const appConfig = require('../../../../config/main');

export const commonStyle = require('./style.css');

interface AppProps {
  location: Location;
  sidebar: JSX.Element;
  main: JSX.Element;
  isSidebarOpen: boolean;
}

@connect(
  (state: ApplicationState) => ({
    location: state.routing.locationBeforeTransitions,
    isSidebarOpen: state.isSidebarOpen,
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
class App extends React.Component<AppProps & DispatchProps, any> {
  constructor(props) {
    super(props);
  }

  private openMenu() {
    this.props.onAction(openSidebar(!this.props.isSidebarOpen));
  }

  public render() {
    const {main} = this.props;
    const {isSidebarOpen} = this.props;
    let {sidebar} = this.props;
    const sidebarClasses = [
      commonStyle.collapsibleSidebar,
      isSidebarOpen
        ? commonStyle.open
        : commonStyle.closed,
    ].join(' ');

    sidebar = (
      <div className={sidebarClasses}>
        {isSidebarOpen ? (!sidebar ? <Sidebar /> : sidebar) : null}
        <CollapseSidebarButton isOpen={isSidebarOpen} openMenu={this.openMenu.bind(this)} />
      </div>
    );

    return (
      <section className={commonStyle.AppContainer}>
        <Helmet {...appConfig.app} {...appConfig.app.head}/>
        <Header />
        <div className={commonStyle.body}>
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
