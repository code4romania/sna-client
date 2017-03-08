import * as React from 'react';
import {IndicatorState, IndicatorAction, Indicator} from '../../models/indicator';
import {getIndicators} from '../../redux/modules/indicator/index';
import {Badge} from '../Badge/index';

const { connect } = require('react-redux');
const { asyncConnect } = require('redux-connect');

const style = require('./style.css');

interface SidebarProps {
  loader?: IndicatorState;
  getIndicators?: Redux.ActionCreator<IndicatorAction>;
}

interface SidebarDispatchProps {
}

@asyncConnect([{
  load: ({ store: { dispatch } }) => {
    return dispatch(getIndicators());
  },
}])
@connect(
  (state) => ({ loader: state.indicators }),
)
export class Sidebar extends React.Component<SidebarProps & SidebarDispatchProps, {}> {
  public render() {
    const { loader } = this.props;
    console.log('sidebar props', this.props);

    let content = [<li key="0">Se încarcă</li>];

    if (!loader.isFetching) {
      content = loader.indicators.map((indicator: Indicator, idx: number) => {
        return <li key={indicator.id}><Badge text={(idx + 1).toString()}/> {indicator.name}</li>;
      });
    }

    console.log('content', content);
    return (<div className={style.Sidebar}>
      <div className={style.title}>
        Indicatori SNA
      </div>
      <ul>
        {content}
      </ul>
    </div>);
  }
}
