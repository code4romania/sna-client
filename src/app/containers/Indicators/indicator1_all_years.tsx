import * as React from "react";
import {Box} from "../../components/Section/box";

interface Props {
}

export class Indicator1AllYears extends React.Component<Props, any> {
  public render(): JSX.Element {
    return (
      <div>
        <Box className="big_box">
          <div>Număr de sesizări privind încălcări ale normelor</div>
          <div>
            <div>
              <div>* sesizări soluționate</div>
              <div>* sesizări în curs de soluționare</div>
            </div>
            <div>Chart</div>
          </div>
        </Box>
        <Box className="small_box">TODO All years</Box>
      </div>
    );
  }
}
