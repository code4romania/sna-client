import * as React from "react";
import {Box} from "../../components/Section/box";

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
              <div><span className="circle2"/> sesizări în curs de soluționare</div>
            </div>
            <div>Chart</div>
          </div>
        </Box>
        <Box className="small_box">
          <div className="title">
            Număr măsuri dispuse
          </div>
          <div className="note">
            (fără a fi diferențiate pe tipuri)
          </div>
          <div>Chart</div>
        </Box>
        </div>
        {/* --- */}

        <div className="top_align">
        <Box className="big_box">
          <div className="title">Număr de decizii prin care s-a confirmat încălcarea normei</div>
          <div className="two_cols">
            <div className="legend">
              <div className="legend_row"><span className="circle1"/>
                decizii ale comisiei anulate sau modificate în instanță</div>
              <div><span className="circle2"/>
                decizii neanulate sau modificate în instanță</div>
            </div>
            <div>Chart</div>
          </div>
        </Box>
        <Box className="small_box">
          <div className="title">
            Gradul de cunoaștere de către angajați a normelor
          </div>
          <div>Chart</div>
        </Box>
        </div>
        {/* --- */}

        <div className="top_align">
        <Box className="small_box">
          <div className="title">
            Număr de activități de formare privind normele de conduită
          </div>
          <div>Chart</div>
        </Box>
        <Box className="small_box">
          <div className="title">
            Număr persoane care au fost instruite prin formarea profesională
          </div>
          <div>Chart</div>
        </Box>
        <Box className="small_box">
          <div className="title">
            Nr. măsuri adopdate pentru înlăturarea cauzelor încălcării normelor
          </div>
          <div>Chart</div>
        </Box>
        </div>
        {/* --- */}

        <div className="top_align">
        <Box className="big_box">
          <div className="title">Număr persoane/instituție care au săvârșit abateri disciplinare</div>
          <div className="two_cols">
            <div className="legend">
              <div className="legend_row"><span className="circle1"/> persoane care au săvârșit repetat abateri</div>
              <div><span className="circle2"/> persoane care au săvârșit nerepetat abateri</div>
            </div>
            <div>Chart</div>
          </div>
        </Box>
        <Box className="small_box">
          <div className="title">
            Durata medie a procedurilor
          </div>
          <div>Chart</div>
        </Box>
        </div>
      </div>
    );
  }
}
