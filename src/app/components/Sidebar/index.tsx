import * as React from 'react';
import {Link} from 'react-router';
import {List} from 'immutable';
import {Dispatch} from 'react-redux';
const {connect} = require('react-redux');
const {asyncConnect} = require('redux-connect');

// import {Indicator} from '../../models/indicator';
import {Badge} from '../Badge/index';
import {ApplicationState} from '../../redux/application_state';
import {selAdminPath, MyLocation} from '../../helpers/url_helper';
import {areCategoriesLoaded, categories /* location */} from '../../selectors/index';
import {DispatchProps} from '../Section/filters';
import SidebarWrapper from '../sidebarWrapper/index';
import {loadCategoriesConfig} from '../../redux/modules/categories/index';
import {Category} from '../../models/category';
// import {ResponsiveBrowser} from '../../models/responsiveBrowser';

const style = require('./style.css');

interface SidebarProps {
  areCategoriesLoaded?: boolean;
  categories?: List<Category>;
  location?: MyLocation;
}

@asyncConnect([
  loadCategoriesConfig(),
])
@connect(
  (state: ApplicationState): SidebarProps  => ({
    areCategoriesLoaded: areCategoriesLoaded(state),
    categories: categories(state),
  }),
  (dispatch: Dispatch<ApplicationState>) => ({ onAction: dispatch }),
)
export class HomeSidebar extends React.Component<SidebarProps & DispatchProps, {}> {
  constructor(props) {
    super(props);
  }

  public render() {
    const { areCategoriesLoaded } = this.props;

    let content = null;
    /* tslint:disable:no-unused-expression */
    this.props.location && this.props.location.query && delete this.props.location.query.indicator_id; // TODO ~
    /* tslint:enable:no-unused-expression */

    const link = (indicator) => selAdminPath(indicator.id, this.props.location && this.props.location.query); // TODO ~

    if (!areCategoriesLoaded) {
      content = <li key='0'>Se încarcă</li>;
    } else {
      content = this.props.categories.map((category: Category) => {
        return (
          <li key={category.id}>
            <Badge text={category.id.toString()}/>
            <Link to={link(category)}>{category.name}</Link>
          </li>
        );
      });
    }

    return (
      <div className={style.Sidebar}>
        <div className={style.spacer}/>
        <div className={style.title}>Indicatori SNA</div>
        <ul>{content}</ul>
      </div>
    );
  }
}

export default SidebarWrapper(HomeSidebar);
