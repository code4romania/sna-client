import * as React from 'react';
// import * as _ from 'lodash';
const { connect } = require('react-redux');

// import {Box} from '../../components/Section/box';
// import {AreaChartValue, SimpleAreaChart} from '../../components/Charts/simple_area_chart';
import {ApplicationState} from '../../redux/application_state';
import {
  ministryCategoryStatsForAllYears,
  anticorruptionAdminCategoryStatsForAllYears,
  countyCategoryStatsForAllYears,
} from '../../selectors/indicators';
import {currentCategory} from '../../selectors/index';
import {Category} from '../../models/category';
import {wrapIndicators} from './indicator1_one_year';

import {
  INDICATOR1_ALL_YEARS_GROUPING,
  // DptDoughnutChartLabels,
  // MediumReferenceLinearScaleLabels,
} from './indicator1_all_years_grouping';
import {INDICATOR1_TYPES} from './indicator1_types';
import {OneAreaLineChartProps, OneAreaLineChart} from "../../components/Indicators/one_area_line_chart";
import {
  DptDoughnutChartLabels,
  MediumReferenceLinearScaleLabels,
} from "containers/Indicators/indicator1_one_year_grouping";
import {TwoAreasLineChart, TwoAreasLineChartProps} from "../../components/Indicators/two_areas_line_chart";
import {chooseByAdministrationType} from "../../helpers/administration_helper";
// import {DptDoughnutChart, DptDoughnutChartProps} from '../../components/Indicators/dpt_doughnut_chart';
// import {
//   MediumReferenceLinearScale,
//   MediumReferenceLinearScaleProps,
// } from '../../components/Indicators/medium_reference_linear_scale';
// import {
//   MixedVerticalBarChartMediumReferenceLinearScale,
//   MixedVerticalBarChartMediumReferenceLinearScaleProps,
// } from '../../components/Indicators/mixed_vertical_bar_chart_medium_reference_linear_scale';
// import {NominalScale, NominalScaleProps} from '../../components/Indicators/nominal_scale';

interface Props {
  type?: string;
  currentCategory?: Category;
  categoryStats?: any;
}

@connect(
  (state: ApplicationState, ownProps: Props): Props => ({
    currentCategory: currentCategory(state),
    categoryStats: chooseByAdministrationType([
      ministryCategoryStatsForAllYears(state),
      anticorruptionAdminCategoryStatsForAllYears(state),
      countyCategoryStatsForAllYears(state),
    ], ownProps.type),
  }),
)
export class Indicator1AllYears extends React.Component<Props, any> {
  public render(): JSX.Element {
    const {
      currentCategory,
      // currentIndicators,
      // selectedMinistry,
      categoryStats,
    } = this.props;

    if (!(categoryStats && categoryStats.size)) {
      return null;
    }

    const indicatorGroup = INDICATOR1_ALL_YEARS_GROUPING.find((ig) => ig.categoryId === currentCategory.id);

    if (!indicatorGroup) {
      return null;
    }

    const indicatorMappings = indicatorGroup.indicatorGrouping.map((indicator, idx) => {
      switch (indicator.indicatorType) {

        // ONE AREA LINE CHART
        case INDICATOR1_TYPES.MEDIUM_REFERENCE_LINEAR_SCALE:
        case INDICATOR1_TYPES.BIMEDIUM_REFERENCE_LINEAR_SCALE:
        case INDICATOR1_TYPES.MIXED_VERTICAL_BAR_CHART_MEDIUM_REFERENCE_LINEAR_SCALE: {
          const value = categoryStats.get(indicator.indicators[0]);
          // const catMaxAvg = categoryMaxAvgStats.get(indicator.indicators[0]);

          // if (!value) {
          //   return null;
          // }

          // const percentAverage = catMaxAvg.avg * 100 / catMaxAvg.max;
          // const percentValue = value * 100 / catMaxAvg.max;
          const labels = (indicator.labels as MediumReferenceLinearScaleLabels);

          const props: OneAreaLineChartProps = {
            title: labels.title,
            note: labels.note,
            desc: labels.desc,
            value,
            // percentValue,
            // percentAverage,
            big: indicator.indicatorType === INDICATOR1_TYPES.BIMEDIUM_REFERENCE_LINEAR_SCALE,
          };

          return <OneAreaLineChart {...props} key={idx}/>;
        }

        // TWO AREAS LINE CHART
        case INDICATOR1_TYPES.DPT_DOUGHNUT_CHART: {
          const labels = (indicator.labels as DptDoughnutChartLabels);
          const indicatorStats0 = categoryStats.get(indicator.indicators[0]);

          const props: TwoAreasLineChartProps = {
            title: labels.title,
            desc1: labels.desc1,
            valueTitle: labels.valueTitle,
            desc2: labels.desc2,
            leftValue: indicatorStats0,
            // centerValue: categoryStats.get(indicator.indicators[1]),
            rightValue: indicator.indicators[2]
              ? categoryStats.get(indicator.indicators[2])
              : categoryStats.get(indicator.indicators[1])
                .map((indicatorYearValue, idx) => {
                  indicatorYearValue.value -= indicatorStats0[idx].value;

                  return indicatorYearValue;
                }),
          };

          return <TwoAreasLineChart {...props} key={idx}/>;
        }

        // IGNORED TEXT INDICATORS
        case INDICATOR1_TYPES.BINOMINAL_SCALE:
        case INDICATOR1_TYPES.NOMINAL_SCALE:
        default: {
          return null;
        }
      }
    });

    const wrappedIndicatorMappings = wrapIndicators(indicatorMappings, indicatorGroup);

    return (
      <div>
        {wrappedIndicatorMappings}
      </div>
    );

    // ----------------------------------------------------------

    // const {indicatorStats} = this.props;
    // // const cat1 = indicatorStats.get(1);
    // const cat2 = indicatorStats.get(11);
    // const cat3 = indicatorStats.get(12);
    // const cat4 = indicatorStats.get(13);
    //
    // return (
    //   <div>
    //
    //     <div className="top_align">
    //
    //       {/*-- big_box --*/}
    //
    //       <Box className="big_box">
    //         <div className="title">Număr de sesizări privind încălcări ale normelor</div>
    //         <div className="two_cols">
    //           <div className="legend">
    //             <div className="legend_row"><span className="circle1"/> sesizări soluționate</div>
    //             <div className="legend_row"><span className="circle2"/> sesizări în curs de soluționare</div>
    //           </div>
    //           <div>
    //             <SimpleAreaChart width={297} height={148} showTwoAreas={true} data={combineData(cat3, cat2)}/>
    //           </div>
    //         </div>
    //       </Box>
    //
    //       {/*-- small_box --*/}
    //
    //       <Box className="small_box">
    //         <div className="title">
    //           Număr măsuri dispuse
    //         </div>
    //         <div className="note">
    //           (fără a fi diferențiate pe tipuri)
    //         </div>
    //         <div>
    //           <SimpleAreaChart width={230} height={131}/>
    //         </div>
    //       </Box>
    //
    //     </div>
    //
    //     {/* +++ */}
    //
    //     <div className="top_align">
    //
    //       {/*-- big_box --*/}
    //
    //       <Box className="big_box">
    //         <div className="title">Număr de decizii prin care s-a confirmat încălcarea normei</div>
    //         <div className="two_cols">
    //           <div className="legend">
    //             <div className="legend_row">
    //               <div className="circle1"/>
    //               decizii ale comisiei anulate sau modificate în instanță
    //             </div>
    //             <div className="legend_row">
    //               <div className="circle2"/>
    //               decizii neanulate sau modificate în instanță
    //             </div>
    //           </div>
    //           <div>
    //             <SimpleAreaChart width={297} height={148} showTwoAreas={true}/>
    //           </div>
    //         </div>
    //       </Box>
    //
    //       {/*-- small_box --*/}
    //
    //       <Box className="small_box">
    //         <div className="title">
    //           Gradul de cunoaștere de către angajați a normelor
    //         </div>
    //         <div>
    //           <SimpleAreaChart width={230} height={131}/>
    //         </div>
    //       </Box>
    //
    //     </div>
    //
    //     {/* --- */}
    //
    //     <div className="top_align">
    //
    //       {/*-- small_box --*/}
    //
    //       <Box className="small_box">
    //         <div className="title">
    //           Număr de activități de formare privind normele de conduită
    //         </div>
    //         <div>
    //           <SimpleAreaChart width={230} height={131}/>
    //         </div>
    //       </Box>
    //
    //       {/*-- small_box --*/}
    //
    //       <Box className="small_box">
    //         <div className="title">
    //           Număr persoane care au fost instruite prin formarea profesională
    //         </div>
    //         <div>
    //           <SimpleAreaChart width={230} height={131}/>
    //         </div>
    //       </Box>
    //
    //       {/*-- small_box --*/}
    //
    //       <Box className="small_box">
    //         <div className="title">
    //           Nr. măsuri adopdate pentru înlăturarea cauzelor încălcării normelor
    //         </div>
    //         <div>
    //           <SimpleAreaChart width={230} height={131}/>
    //         </div>
    //       </Box>
    //
    //     </div>
    //
    //     {/* +++ */}
    //
    //     <div className="top_align">
    //
    //       {/*-- big_box --*/}
    //
    //       <Box className="big_box">
    //         <div className="title">Număr persoane/instituție care au săvârșit abateri disciplinare</div>
    //         <div className="two_cols">
    //           <div className="legend">
    //             <div className="legend_row">
    //               <div className="circle1"/>
    //               persoane care au săvârșit repetat abateri
    //             </div>
    //             <div className="legend_row">
    //               <div className="circle2"/>
    //               persoane care au săvârșit nerepetat abateri
    //             </div>
    //           </div>
    //           <div>
    //             <SimpleAreaChart width={297} height={148} showTwoAreas={true}/>
    //           </div>
    //         </div>
    //       </Box>
    //
    //       {/*-- small_box --*/}
    //
    //       <Box className="small_box">
    //         <div className="title">
    //           Durata medie a procedurilor
    //         </div>
    //         <div>
    //           <SimpleAreaChart width={230} height={131} data={cat4}/>
    //         </div>
    //       </Box>
    //
    //     </div>
    //
    //   </div>
    // );
  }
}

// // v2 smaller chart values, green
// function combineData(v1: AreaChartValue[], v2: AreaChartValue[]): AreaChartValue[] {
//   const v2map = _.groupBy(v2, "year");
//   return v1.map((elem) => (({
//     ...elem,
//     v2: v2map[elem.year][0].value,
//   } as AreaChartValue)));
// }
