import * as React from 'react';
import {CheckboxGroup, CheckBoxOptions} from "../../components/CheckboxGroup/index";
import {Checkbox} from "../../components/Checkbox/index";

const style = require('./style.css');

interface AdminFilterProps {
  type: "județele" | "ministerele";
  areAllChecked: boolean;
  data: CheckBoxOptions[];
  columns: number;
  onSelectAll: () => void;
  onSelectOne: (option) => void;
}

export function AdminFilter(props: AdminFilterProps) {
  return (
    <div className={style.countyFilter}>
      <div className={style.selectAll}>
        <Checkbox value="0" label={`Afișează toate ${props.type}`} checked={props.areAllChecked}
                  onChange={props.onSelectAll} />
      </div>
      <div className={style.select_one_txt}>Sau afișează doar {props.type}...</div>
      <CheckboxGroup
        options={props.data}
        columns={props.columns}
        onChange={props.onSelectOne} />
    </div>
  );
}
