import * as React from "react";
import {connect} from "react-redux";
import {Map} from "immutable";
import {Box} from "../../components/Section/box";
import {SimplePieChart, PieValue} from "../../components/Charts/simple_pie_chart";
import {LineChart} from "../../components/Charts/line_chart";
import {ApplicationState} from "../../redux/application_state";
import {categoryStatsForYear, categoryMaxAvgStatsForYear, CategoryId, MaxAvg} from "../../selectors/indicators";

interface Props {
  categoryStats?: Map<CategoryId, number>;
  categoryMaxAvgStats?: Map<CategoryId, MaxAvg>;
}

@connect(
  (state: ApplicationState): Props => ({
    categoryStats: categoryStatsForYear(state),
    categoryMaxAvgStats: categoryMaxAvgStatsForYear(state),
  }),
)
export class Indicator1OneYear extends React.Component<Props, any> {
  public render(): JSX.Element {
    const {categoryStats, categoryMaxAvgStats} = this.props;
    const cat1 = categoryStats.get(1);
    const cat2 = categoryStats.get(2);
    const cat3 = categoryStats.get(3);
    const cat4 = categoryStats.get(4);
    const cat4MaxAvg = categoryMaxAvgStats.get(4);

    if (!cat4MaxAvg) {
      return null;
    }

    const cat4AvgPerc = cat4MaxAvg.avg * 100 / cat4MaxAvg.max;
    const cat4Perc = cat4 * 100 / cat4MaxAvg.max;

    return (
      <div>
        <div className="top_align">
          <Box className="big_box">
            <div className="title">Număr de sesizări privind încălcări ale normelor</div>
            <div className="pie_row">
              <div className="pie_desc blue">
                <div className="number">{cat3}</div>
                <div className="desc">sesizări soluționate</div>
              </div>
              <SimplePieChart width={150} height={150} valueTitle="decizii"
                              data={pieData(cat3, cat2)}
                              total={cat1}
              />
              <div className="pie_desc green">
                <div className="number">{cat2}</div>
                <div className="desc">sesizări soluționate</div>
              </div>
            </div>
          </Box>
          <Box className="small_box">
            <div className="title">
              Număr măsuri dispuse
            </div>
            <div className="note">
              (fără a fi diferențiate pe tipuri)
            </div>
            <div>
              <div className="big_value">22</div>
              <div className="big_value_desc">măsuri</div>
              <LineChart width={230} height={46} value={80} avg={20}/>
            </div>
          </Box>
        </div>
        {/* --- */}

        <div className="top_align">
          <Box className="big_box">
            <div className="title">Număr de decizii prin care s-a confirmat încălcarea normei</div>
            <div className="pie_row">
              <div className="pie_desc blue">
                <div className="number">6</div>
                <div className="desc">decizii ale comisiei anulate sau modificate în instanță</div>
              </div>
              <SimplePieChart width={150} height={150} valueTitle="decizii"
                              data={pieData(6, 2)}
                              total={8}/>
              <div className="pie_desc green">
                <div className="number">2</div>
                <div className="desc">decizii neanulate sau modificate în instanță</div>
              </div>
            </div>
          </Box>
          <Box className="small_box">
            <div className="title">
              Gradul de cunoaștere de către angajați a normelor
            </div>
            <div>
              <div className="box_bar">
                <div className="stacked_bar">
                  <div className="bar">
                    <div className="value" style={{height: '25%'}}/>
                  </div>
                </div>
                <span className="value">25</span>
                <span className="percent">%</span>
              </div>
              <LineChart width={230} height={46} value={80} avg={20}/>
            </div>
          </Box>
        </div>
        {/* --- */}

        <div className="top_align">
          <Box className="small_box">
            <div className="title">
              Număr de activități de formare privind normele de conduită
            </div>
            <div>
              <div className="big_value">14</div>
              <div className="big_value_desc">activități</div>
              <LineChart width={230} height={46} value={80} avg={20}/>
            </div>
          </Box>
          <Box className="small_box">
            <div className="title">
              Număr persoane care au fost instruite prin formarea profesională
            </div>
            <div>
              <div className="big_value">34</div>
              <div className="big_value_desc">persoane</div>
              <LineChart width={230} height={46} value={80} avg={20}/>
            </div>
          </Box>
          <Box className="small_box">
            <div className="title">
              Nr. măsuri adopdate pentru înlăturarea cauzelor încălcării normelor
            </div>
            <div>
              <div className="big_value">22</div>
              <div className="big_value_desc">măsuri</div>
              <LineChart width={230} height={46} value={80} avg={20}/>
            </div>
          </Box>
        </div>
        {/* --- */}

        <div className="top_align">
          <Box className="big_box">
            <div className="title">Număr persoane/instituție care au săvârșit abateri disciplinare</div>
            <div className="pie_row">
              <div className="pie_desc blue">
                <div className="number">14</div>
                <div className="desc">persoane care au săvârșit repetate abateri</div>
              </div>
              <SimplePieChart width={150} height={150} valueTitle="persoane"
                              data={pieData(14, 4)}
                              total={18}/>
              <div className="pie_desc green">
                <div className="number">4</div>
                <div className="desc">persoane care au săvârșit nerepetate abateri</div>
              </div>
            </div>
          </Box>
          <Box className="small_box">
            <div className="title">
              Durata medie a procedurilor
            </div>
            <div>
              <div className="big_value">{cat4}</div>
              <div className="big_value_desc">zile</div>
              <LineChart width={230} height={46} value={cat4Perc} avg={cat4AvgPerc}/>
            </div>
          </Box>
        </div>
      </div>
    );
  }
}

function pieData(max: number, min: number): PieValue[] {
  return [{name: "A", value: max}, {name: "B", value: min}];
}
