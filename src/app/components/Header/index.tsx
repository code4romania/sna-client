import * as React from 'react';
import {Link} from 'react-router';
import {Dispatch} from 'react-redux';
const {connect} = require('react-redux');

import {ApplicationState} from '../../redux/application_state';
import {DispatchProps} from '../Section/filters';
import {ResponsiveBrowser} from '../../models/responsiveBrowser';

const style = require('./style.css');

interface HeaderProps {
  browser?: ResponsiveBrowser;
}

@connect(
  (state: ApplicationState): HeaderProps  => ({
    browser: state.browser,
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class Header extends React.Component<HeaderProps & DispatchProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { browser } = this.props;

    const logo = (browser.lessThan.medium && browser.width !== browser.breakpoints.small)
      ? require('./Logo-logo.svg')
      : require('./Logo-full.svg');

    return (
      <nav className={style.Nav}>
        <div className={style.Logo}>
          <Link to="/">
            <img src={logo}
                 title="Strategia Națională Anticorupție - Vizualizare Date"/>
          </Link>
        </div>

        <ul>
          <li><Link to="about">Despre aplicație</Link></li>
          <li><Link to="help">Ajutor</Link></li>
          <li className={style.oldSite}><a href="http://sna.just.ro/" target="_blank">sna.just.ro</a></li>
        </ul>
      </nav>
    );
  }
}
