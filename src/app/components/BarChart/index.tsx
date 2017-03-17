import * as React from 'react';
import {Bar, Tooltip, YAxis, XAxis, BarChart} from "recharts";
import {BarLabel} from "../BarLabel/index";

interface Props {
}

const data = [
  {name: 'Ministerul Afacerilor Externe', value: 21},
  {name: 'Ministerul 2', value: 18},
  {name: 'Ministerul 3', value: 15},
  {name: 'Ministerul 4', value: 12},
  {name: 'Ministerul 5', value: 9},
  {name: 'Ministerul 6', value: 6},
  {name: 'Ministerul 7', value: 3},
];

export class SimpleBarChart extends React.Component<Props, {}> {
  public render() {
    return (
      <BarChart width={700} height={data.length * 45} data={data}
                layout="vertical"
                maxBarSize={250}
                margin={{top: 5, right: 30, left: 20, bottom: 5}}>
        <XAxis type="number" hide={true}/>
        <YAxis type="category" dataKey="name" hide={true} />
        {/*<CartesianGrid strokeDasharray="3 3"/>*/}
        <Tooltip/>
        {/*<Legend />*/}
        <Bar dataKey="value" fill="#4990E2" label={<BarLabel />} name="numar de sesizări"/>
      </BarChart>
    );
  }
}
