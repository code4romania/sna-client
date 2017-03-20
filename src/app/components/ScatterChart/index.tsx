import * as React from 'react';
import {Tooltip, YAxis, ZAxis, XAxis, ScatterChart, Scatter} from "recharts";

export const chartStyle = require('./style.css');

interface Props {
}
interface TooltipProps {
  payload?: any[];
}

const data = [
  {x: 10, y: 20, z: "Ministerul Afacerilor Externe"},
  {x: 120, y: 100, z: "M2"},
  {x: 170, y: 300, z: "M3"},
  {x: 140, y: 25, z: "M4"},
  {x: 150, y: 400, z: "M5"},
  {x: 110, y: 280, z: "M6"},
  {x: 110, y: 270, z: "M7"},
  ];

export const MyTooltip = (props: TooltipProps) => {
  if (!props.payload) {
    return null;
  }

  const payload = props.payload[0].payload;
  return (
    <div className={chartStyle.Tooltip}>
      <div>{payload.z}</div>
      <div>{payload.y} sesizări</div>
    </div>
  );
};

export class SimpleScatterChart extends React.Component<Props, {}> {
  public render() {
    return (
      <ScatterChart width={400} height={400}>
        <XAxis dataKey={'x'} name='stature' stroke="#CFD5D9"/>
        <YAxis dataKey={'y'} name='weight' stroke="#CFD5D9"/>
        <ZAxis dataKey={'z'} name='type'/>
        <Scatter name='M' data={data} fill='#4990E2'/>
        <Tooltip content={<MyTooltip/>} cursor={{strokeDasharray: '3 3'}}/>
      </ScatterChart>
    );
  }
}
