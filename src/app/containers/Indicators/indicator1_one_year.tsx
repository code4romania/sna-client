import * as React from "react";
import {Box} from "../../components/Section/box";
import {SimplePieChart} from "../../components/Charts/simple_pie_chart";
import {LineChart} from "../../components/Charts/line_chart";

interface Props {
}

export class Indicator1OneYear extends React.Component<Props, any> {
  public render(): JSX.Element {
    return (
      <div>
        <div className="top_align">
          <Box className="big_box">
            <div className="title">Număr de sesizări privind încălcări ale normelor</div>
            <div>
              <SimplePieChart width={150} height={150} valueTitle="decizii"/>
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
              <LineChart />
            </div>
          </Box>
        </div>
        {/* --- */}

        <div className="top_align">
          <Box className="big_box">
            <div className="title">Număr de decizii prin care s-a confirmat încălcarea normei</div>
            <div>
              <SimplePieChart width={150} height={150} valueTitle="decizii"/>
            </div>
          </Box>
          <Box className="small_box">
            <div className="title">
              Gradul de cunoaștere de către angajați a normelor
            </div>
            <div>
              chart
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
              chart
            </div>
          </Box>
          <Box className="small_box">
            <div className="title">
              Număr persoane care au fost instruite prin formarea profesională
            </div>
            <div>
              chart
            </div>
          </Box>
          <Box className="small_box">
            <div className="title">
              Nr. măsuri adopdate pentru înlăturarea cauzelor încălcării normelor
            </div>
            <div>
              chart
            </div>
          </Box>
        </div>
        {/* --- */}

        <div className="top_align">
          <Box className="big_box">
            <div className="title">Număr persoane/instituție care au săvârșit abateri disciplinare</div>
            <div>
              <SimplePieChart width={150} height={150} valueTitle="persoane"/>
            </div>
          </Box>
          <Box className="small_box">
            <div className="title">
              Durata medie a procedurilor
            </div>
            <div>
              chart
            </div>
          </Box>
        </div>
      </div>
    );
  }
}
