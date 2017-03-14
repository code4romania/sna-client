import * as React from 'react';
import {ContentHeader} from '../../components/ContentHeader/index';
import {loadIndicatorsConfig} from '../../redux/modules/indicator/index';
import {ApplicationState, LoadEntryState, isContentLoaded} from '../../redux/application_state';
import {Indicator} from '../../models/indicator';
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');

const style = require('./style.css');

interface RouteParams {
  id: string;
}

interface Props {
  loader?: LoadEntryState;
  indicators?: Indicator[];
  params?: RouteParams;
}

@asyncConnect([
  loadIndicatorsConfig(),
])
@connect(
  (state: ApplicationState): Props => ({
    loader: state.reduxAsyncConnect.loadState.indicators,
    indicators: state.reduxAsyncConnect.indicators,
  }),
)
export class MinistryOverview extends React.Component<Props, any> {
  public render() {
    const { loader, params, indicators } = this.props;

    let title = null;

    if (isContentLoaded(loader)) {
      title = `${params.id}. ${indicators[parseInt(params.id, 10) - 1].name}`;
    }

    return (
      <div className={style.MinistryOverview}>
        <ContentHeader parentTitle="Prezentare generală ministere" title={title}/>
        <div className={style.main}>
          <div>
            <div className={style.title}>Indicator vizualizat</div>
            <DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
              <MenuItem eventKey="1">Action</MenuItem>
              <MenuItem eventKey="2">Another action</MenuItem>
              <MenuItem eventKey="3" active>Active Item</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey="4">Separated link</MenuItem>
            </DropdownButton>
          </div>

          <div className={style.params}>
            <div className={style.year_slider}>
              <div className={style.title}>Anul afișat</div>
              <input type="range" min="2011" max="2016" defaultValue={2016}/>
            </div>
            <div className={style.chart_type}>
              <div className={style.title}>Tip vizualizare</div>
              <div>
                chart1 chart2
              </div>
            </div>
          </div>

          <div className={style.content}>
            <div className={style.ministry_filter}>
              <div className={style.title}>Date afișate</div>
              <div>
                Ministry selector
              </div>
            </div>
            <div className={style.chart_display}>
              <div className={style.title}>Număr sesizări</div>
              <div>chart</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
