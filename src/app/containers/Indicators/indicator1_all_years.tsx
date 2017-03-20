import * as React from "react";
import {Box} from "../../components/Section/box";
import {SimpleAreaChart} from "../../components/Charts/simple_area_chart";

interface Props {
}

export class Indicator1AllYears extends React.Component<Props, any> {
  public render(): JSX.Element {
    return (
      <div>
        <div className="top_align">
        <Box className="big_box">
          <div className="title">Număr de sesizări privind încălcări ale normelor</div>
          <div className="two_cols">
            <div className="legend">
              <div className="legend_row"><span className="circle1"/> sesizări soluționate</div>
              <div className="legend_row"><span className="circle2"/> sesizări în curs de soluționare</div>
            </div>
            <div>
              <SimpleAreaChart width={297} height={148} showTwoAreas={true} />
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
            <SimpleAreaChart width={230} height={131} />
          </div>
        </Box>
        </div>
        {/* --- */}

        <div className="top_align">
        <Box className="big_box">
          <div className="title">Număr de decizii prin care s-a confirmat încălcarea normei</div>
          <div className="two_cols">
            <div className="legend">
              <div className="legend_row">
                <div className="circle1"/>
                decizii ale comisiei anulate sau modificate în instanță
              </div>
              <div className="legend_row">
                <div className="circle2"/>
                decizii neanulate sau modificate în instanță
              </div>
            </div>
            <div>
              <SimpleAreaChart width={297} height={148} showTwoAreas={true} />
            </div>
          </div>
        </Box>
        <Box className="small_box">
          <div className="title">
            Gradul de cunoaștere de către angajați a normelor
          </div>
          <div>
            <SimpleAreaChart width={230} height={131} />
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
            <SimpleAreaChart width={230} height={131} />
          </div>
        </Box>
        <Box className="small_box">
          <div className="title">
            Număr persoane care au fost instruite prin formarea profesională
          </div>
          <div>
            <SimpleAreaChart width={230} height={131} />
          </div>
        </Box>
        <Box className="small_box">
          <div className="title">
            Nr. măsuri adopdate pentru înlăturarea cauzelor încălcării normelor
          </div>
          <div>
            <SimpleAreaChart width={230} height={131} />
          </div>
        </Box>
        </div>
        {/* --- */}

        <div className="top_align">
        <Box className="big_box">
          <div className="title">Număr persoane/instituție care au săvârșit abateri disciplinare</div>
          <div className="two_cols">
            <div className="legend">
              <div className="legend_row">
                <div className="circle1"/>
                persoane care au săvârșit repetat abateri
              </div>
              <div className="legend_row">
                <div className="circle2" />
                persoane care au săvârșit nerepetat abateri
              </div>
            </div>
            <div>
              <SimpleAreaChart width={297} height={148} showTwoAreas={true} />
            </div>
          </div>
        </Box>
        <Box className="small_box">
          <div className="title">
            Durata medie a procedurilor
          </div>
          <div>
            <SimpleAreaChart width={230} height={131} />
          </div>
        </Box>
        </div>
      </div>
    );
  }
}
