import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import {bindActionCreators} from 'redux';
const {connect} = require('react-redux');
// const {asyncConnect} = require('redux-connect');
import {Dispatch} from 'react-redux';

import {DispatchProps} from '../Section/filters';
import {ApplicationState} from '../../redux/application_state'; // AsyncContext
import {location} from '../../selectors/index';
import {openSidebar} from '../../redux/reducers';
import {CollapseSidebarButton} from '../CollapseSidebarButton/index';
import {HomeSidebar} from 'components';
import {saveToLocalStorageAction} from '../../redux/modules/localStorage/index';
import {ILocalStorage} from '../../models/localStorage';
import {ResponsiveBrowser} from '../../models/responsiveBrowser';

const style = require('./style.css');

interface SidebarWrapperProps {
  location: Location;
  localStorage: ILocalStorage;
  params: any;
  isSidebarOpen: boolean;
  browser: ResponsiveBrowser;
}

function SidebarWrapper(SidebarComponent) {
  class BaseSidebar extends React.Component<SidebarWrapperProps & DispatchProps, any> {
    constructor(props) {
      super(props);

      this.handleDocumentClickEvent = this.handleDocumentClickEvent.bind(this);
      this.openMenu = this.openMenu.bind(this);
    }

    public componentDidMount() {
      if (window) {
        window.addEventListener('click', this.handleDocumentClickEvent, true);
      }
    }

    public componentWillUnmount() {
      if (window) {
        window.removeEventListener('click', this.handleDocumentClickEvent, true);
      }
    }

    private handleDocumentClickEvent() {
      if (!this.props.localStorage) {
        return;
      }

      switch (this.getRouteLevel()) {
        case 1: {
          if (this.props.localStorage.seenFirstTooltip === false) {
            this.props.onAction(saveToLocalStorageAction({seenFirstTooltip: true}));
          }
          break;
        }
        case 2: {
          if (this.props.params
            && Object.keys(this.props.params).length === 1
            && this.props.localStorage.seenSecondTooltip === false) {
            this.props.onAction(saveToLocalStorageAction({seenSecondTooltip: true}));
          }
          break;
        }
        case 3: {
          if (this.props.params
            && Object.keys(this.props.params).length >= 1
            && this.props.localStorage.seenThirdTooltip === false) {
            this.props.onAction(saveToLocalStorageAction({seenThirdTooltip: true}));
          }
          break;
        }
        default: /* none */
      }
    }

    private openMenu() {
      this.props.onAction(openSidebar(!this.props.isSidebarOpen));
    }

    private getRouteLevel() {
      return (this.props.location.pathname.match(/\//g) || []).length;
    }

    private getTooltipText() {
      let text = null;
      switch (this.getRouteLevel()) {
        case 1: {
          if (this.props.localStorage && this.props.localStorage.seenFirstTooltip === false) {
            text = 'Selectează un indicator pentru a începe';
          }
          break;
        }
        case 2: {
          if (this.props.localStorage && this.props.localStorage.seenSecondTooltip === false) {
            text = 'Selectează un tip de administraţie';
          }
          break;
        }
        case 3: {
          if (this.props.localStorage && this.props.localStorage.seenThirdTooltip === false) {
            text = 'Selectează o instituţie sau prezentare generală';
          }
          break;
        }
        default: /* none */
      }

      return text;
    }

    public render() {
      const {isSidebarOpen, browser} = this.props;
      const sidebar = (isSidebarOpen || (browser.lessThan.medium && browser.width !== browser.breakpoints.small))
        ? (!SidebarComponent
          ? <HomeSidebar  {...this.state} {...this.props} />
          : <SidebarComponent {...this.state} {...this.props} />)
        : null;
      const sidebarClasses = [
        style.SidebarWrapper,
        style.collapsibleSidebar,
        isSidebarOpen
          ? style.open
          : style.closed,
      ].join(' ');

      const sidebarContentClasses = [
        style.collapsibleSidebarContent,
        isSidebarOpen
          ? style.openContent
          : style.closedContent,
      ].join(' ');

      const tooltipText = this.getTooltipText();

      const tooltipElement = tooltipText
        ? (
          <div className={style.tooltip}>
              <span className={style.tooltipStep}>{this.getRouteLevel()}/3</span>
              <span className={style.tooltipText}>{tooltipText}</span>
            </div>
        )
        : null;

      return (
        <div className={sidebarClasses}>
          {tooltipElement}
          <div className={sidebarContentClasses}>{isSidebarOpen ? sidebar : null}</div>
          <CollapseSidebarButton isOpen={isSidebarOpen} openMenu={this.openMenu}/>
        </div>
      );
    }
  }

  function mapStateToProps(state: ApplicationState) {
    return {
      location: location(state),
      isSidebarOpen: state.isSidebarOpen,
      localStorage: state.localStorage,
      browser: state.browser,
    };
  }

  function mapDispatchToProps(dispatch: Dispatch<ApplicationState>) {
    return {onAction: dispatch};
  }

  if (SidebarComponent.reduxAsyncConnect) {
    /* tslint:disable:no-string-literal */
    // https://github.com/makeomatic/redux-connect/issues/46
    BaseSidebar['reduxAsyncConnect'] = SidebarComponent.reduxAsyncConnect;
    /* tslint:enable:no-string-literal */
  }

  return connect(
    // [
    //   {
    //     key: 'params',
    //     promise: ({params}) => params,
    //   },
    // ],
    mapStateToProps,
    mapDispatchToProps,
  )(BaseSidebar);
}

export default SidebarWrapper;
