import * as React from 'react';
import {Dispatch} from 'react-redux';
const {connect} = require('react-redux');

import {ResponsiveBrowser} from '../../models/responsiveBrowser';
import {ApplicationState} from '../../redux/application_state';
import {DispatchProps} from '../Section/filters';

const style = require('./style.css');

interface CollapseSidebarButtonProps {
  isOpen?: boolean;
  openMenu?: () => void;
  browser?: ResponsiveBrowser;
}

@connect(
  (state: ApplicationState): CollapseSidebarButtonProps  => ({
    browser: state.browser,
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class CollapseSidebarButton extends React.Component<CollapseSidebarButtonProps & DispatchProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const {isOpen, openMenu, browser} = this.props;

    let btnLabel;
    if (isOpen) {
      btnLabel = (browser.lessThan.medium && browser.width !== browser.breakpoints.small)
        ? 'Închide navigație'
        : 'Ascunde navigație';
    } else {
      btnLabel = (browser.lessThan.medium && browser.width !== browser.breakpoints.small)
        ? 'Deschide navigație'
        : '';
    }

    const svgRotate = isOpen
      ? ''
      : 'rotate(180) translate(-16, -17)';

    const sidebarIcon = (browser.lessThan.medium && browser.width !== browser.breakpoints.small)
      ? null
      : this.getSidebarIcon(svgRotate);
    const topbarIcon = (browser.lessThan.medium && browser.width !== browser.breakpoints.small)
      ? this.getTopbarIcon(isOpen)
      : null;

    /* tslint:disable:max-line-length jsx-self-close */
    return (
      <div onClick={openMenu} className={style.collapseExpandContainer}>
        {topbarIcon}
        <span className={style.collapseExpandContainerLabel}>{btnLabel}</span>
        {sidebarIcon}
      </div>
    );
  }

  private getTopbarIcon(isOpen) {
    const topbarIconClasses = [
      style.navIcon3,
      isOpen
        ? style.open
        : style.closed,
    ].join(' ');

    return (
      <div className={topbarIconClasses}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    );
  }

  private getSidebarIcon(svgRotate) {
    /* tslint:disable:max-line-length jsx-self-close */
    return (
      <svg className={style.collapseExpandContainerIcon} width='16' height='17' viewBox='0 0 16 17'>
        <title>Open/close button</title>
        <g fill="#A5B3BB" fillRule="evenodd" transform={svgRotate}>
          <path d="M0 0h2v17H0z"/>
          <path d="M7.414 8l2.293-2.293c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L3.586 9l4.707 4.707c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L7.414 10H14.5c.552 0 1-.448 1-1s-.448-1-1-1H7.414z"
                fillRule="nonzero"/>
        </g>
      </svg>
    );
    /* tslint:enable:max-line-length jsx-self-close */
  }
}
