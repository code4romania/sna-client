import * as React from 'react';
import {Dispatch} from 'react-redux';
const {connect} = require('react-redux');
import * as _ from 'lodash';

import {ApplicationState} from '../../redux/application_state';

const style = require('./style.css');

interface Props {
  showLoader?: boolean;
  showError?: any;
  errorKeys?: string[];
}

interface LoaderDispatchProps {
  onAction?: (action: {type: string; payload: any; }) => void;
}

@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    ...ownProps,
    showLoader: Object.keys(state.reduxAsyncConnect.loadState)
      .reduce((res: any, key: string) => res || state.reduxAsyncConnect.loadState[key].loading, false),
    showError: Object.keys(state.reduxAsyncConnect.loadState)
      .reduce((res: any, key: string) => state.reduxAsyncConnect.loadState[key].error
        ? {message: state.reduxAsyncConnect.loadState[key].error, key}
        : res, null),
    errorKeys: Object.keys(state.reduxAsyncConnect.loadState)
      .map((key: string) => state.reduxAsyncConnect.loadState[key].error
        ? key
        : null)
      .filter((key: string) => key),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class Loader extends React.Component<Props & LoaderDispatchProps, any> {
  private confirmAndReloadedDebounced: (message) => void;

  constructor(props) {
    super(props);
    this.confirmAndReloadedDebounced = _.debounce(this.confirmAndReload, 200);
  }

  public confirmAndReload(message: string) {
    if (confirm(message + ' Refresh?')) {
      location.reload();
    }
  }

  public render(): JSX.Element {
    const {showLoader, showError, errorKeys, onAction} = this.props;

    if (!(showLoader || showError)) {
      return null;
    }

    if (!showLoader && showError) {
      const message = showError.message || 'Eroare. Refresh sau contactati administratorul site-ului.';

      errorKeys.forEach((key: string) => onAction({type: '@redux-conn/CLEAR', payload: key}));
      this.confirmAndReloadedDebounced(message);

      return null;
    }

    return (
      <div className={style.Loader + ' ' + style.async_data_loading}>
        <div className='spinner'>
          <div className='double-bounce1'/>
          <div className='double-bounce2'/>
        </div>
      </div>
    );
  }
}
