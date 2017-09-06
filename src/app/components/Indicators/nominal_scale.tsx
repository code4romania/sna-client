import * as React from 'react';

import {Box} from '../Section/box';
import {NominalScaleLabels} from '../../containers/Indicators/indicator1_one_year_grouping';

const style = require('./nominal_scale_style.css');

export interface NominalScaleProps extends NominalScaleLabels {
  value: string;
}

interface Props extends NominalScaleProps {
}

export class NominalScale extends React.Component<Props, {}> {
  private modalContent: any;

  constructor(props) {
    super(props);
    this.modalContent = null;
    this.onOpenBtnClick = this.onOpenBtnClick.bind(this);
    this.onCloseBtnClick = this.onCloseBtnClick.bind(this);
    this.onKeyupHandler = this.onKeyupHandler.bind(this);
  }

  private onOpenBtnClick() {
    this.modalContent = (
      <div>
        <div className={style.overlayBackground}/>
        <div className={style.overlayTextBox}>
          <div className={style.closeBtn}>
            <svg onClick={this.onCloseBtnClick}
                 width="15px"
                 height="15px"
                 xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 1000 1000">
              <path fill="#a5b5be" d="M945.7 989.4L10 53.8 54.3 9.4 990 945.1 945.7 989.4z"/>
              <path fill="#a5b5be" d="M10 946.2L945.7 10.6 990 54.9 54.3 990.6 10 946.2 10 946.2z"/>
            </svg>
          </div>
          <div className={style.textBoxTitle}>{this.props.title}</div>
          <br/>
          <p>{this.props.value}</p>
        </div>
      </div>
    );
    window.addEventListener("keyup", this.onKeyupHandler);
    this.forceUpdate();
  }

  private onCloseBtnClick() {
    this.modalContent = null;
    window.removeEventListener("keyup", this.onKeyupHandler);
    this.forceUpdate();
  }

  private onKeyupHandler(event: KeyboardEvent) {
    if (event.which === 27) {
      this.onCloseBtnClick();
    }
  }

  public render() {
    const props = this.props;

    return (
      <Box className="small_box">
        <div className="title">{props.title}</div>
        <div className="text-center">
          <button className={style.btn} onClick={this.onOpenBtnClick}>Vezi text</button>
        </div>
        {this.modalContent}
      </Box>
    );
  }
}
