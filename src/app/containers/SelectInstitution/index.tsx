import * as React from 'react';
import {ContentHeader} from '../../components/ContentHeader/index';
import {CheckboxFilter} from '../../components/CheckboxFilter/index';
import {loadIndicatorsConfig} from '../../redux/modules/indicator/index';
import {ApplicationState, LoadEntryState, isContentLoaded} from '../../redux/application_state';
import {Indicator} from '../../models/indicator';
const { asyncConnect } = require('redux-connect');
const { connect } = require('react-redux');

interface RouteParams {
  id: string;
}

interface SelectIntitutionProps {
  loader?: LoadEntryState;
  indicators?: Indicator[];
  params?: RouteParams;
}

@asyncConnect([
  loadIndicatorsConfig(),
])
@connect(
  (state: ApplicationState): SelectIntitutionProps  => ({
    loader: state.reduxAsyncConnect.loadState.indicators,
    indicators: state.reduxAsyncConnect.indicators,
  }),
)
export class SelectIntitution extends React.Component<SelectIntitutionProps, any> {
  public render() {
    const {loader, params, indicators} = this.props;

    let title = null;

    if (isContentLoaded(loader)) {
      title = `${params.id}. ${indicators[parseInt(params.id, 10) - 1].name}`;
    }

    const judete = [
      { value: 1, label: "Iasi", checked: false },
      { value: 2, label: "Suceava", checked: true },
      { value: 3, label: "Constanta", checked: false },
      { value: 4, label: "Bacau", checked: true },
      { value: 5, label: "Valcea", checked: true },
      { value: 6, label: "Brasov", checked: true },
      { value: 6, label: "Timisoara", checked: true },
    ];

    return (
      <div className="select-todo">
        <ContentHeader parentTitle ="Prezentare indicatori SNA" title={title}/>
        <div className="row">
           <div className="col-md-4">
              <CheckboxFilter
                selectAllLabel="Afiseaza toate judetele"
                options={judete}
                columns={2} />
           </div>
           <div className="col-md-8">
             Chart
           </div>
        </div>
      </div>
    );
  }
}
