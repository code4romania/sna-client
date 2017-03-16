import * as React from 'react';
import {Indicator} from '../../models/indicator';
import {Badge} from '../Badge/index';
import {ApplicationState, LoadEntryState, isContentLoaded} from '../../redux/application_state';
import {Link} from 'react-router';
import {loadIndicatorsConfig} from '../../redux/modules/indicator/index';

const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

const style = require('./style.css');

interface SidebarProps {
  loader?: LoadEntryState;
  indicators?: Indicator[];
}

interface SidebarDispatchProps {
}

@asyncConnect([
  loadIndicatorsConfig(),
])
@connect(
  (state: ApplicationState): SidebarProps  => ({
    loader: state.reduxAsyncConnect.loadState.indicators,
    indicators: state.reduxAsyncConnect.indicators,
  }),
)
export class Sidebar extends React.Component<SidebarProps & SidebarDispatchProps, {}> {
  public render() {
    const { loader } = this.props;

    let content = null;

    if (!isContentLoaded(loader)) {
      content = <li key="0">Se încarcă</li>;
    } else {
      content = this.props.indicators.map((indicator: Indicator, idx: number) => {
        return (
          <li key={indicator.id}><Badge text={(idx + 1).toString()}/>
            <Link to={`/selectAdministration/${idx + 1}`}>{indicator.name}</Link>
            </li>
          );
        });
    }

    return (
      <div className={style.Sidebar}>
        <div className={style.spacer} />
        <div className={style.title}>
          Indicatori SNA
        </div>
        <ul>
          {content}
        </ul>
      </div>
    );
  }
}
