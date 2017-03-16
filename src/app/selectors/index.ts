import {List} from "immutable";
import {createSelector} from "reselect";
import {isContentLoaded} from "../redux/application_state";
import {Indicator} from "../models/indicator";

// type RemoteContent = "indicators" | "ministriesStats";

const isIndicatorsLoaded = (state) => isContentLoaded(state.reduxAsyncConnect.loadState.indicators);
const indicators = (state) => List(state.reduxAsyncConnect.indicators);

const paramCategoryId = (state) => state.routing.locationBeforeTransitions.query.category_id;

const currentIndicatorId = createSelector(
  paramCategoryId,
  (id) => id ? parseInt(id, 10) : 0,
);

const currentIndicator = createSelector(
  indicators, currentIndicatorId,
  (items: List<Indicator>, id) => items.find((i) => i.id === id) || items.first(),
);

export const currentIndicatorTitle = createSelector(
  isIndicatorsLoaded, currentIndicator,
  (loaded, indicator) => ( loaded ?  indicator.name : "Loading"),
);
