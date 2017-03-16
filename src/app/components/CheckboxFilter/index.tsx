import * as React from 'react';
import {Checkbox} from '../Checkbox/index';

const s = require('./style.css');

interface CheckboxFilterProps {
  selectAllLabel: string;
  options?: Array<{ checked: boolean, label: string, value: any }>;
  columns?: number;
}

export const CheckboxFilter = (props: CheckboxFilterProps) => {
  const columns = props.columns || 1;
  const options = props.options || [];

  const renderOption = (option) => {
    return (
      <Checkbox
        key={Math.random()}
        checked={option.checked}
        label={option.label}
        value={option.value} />
    );
  };

  const renderColumn = (column) => {
    const itemsPerColumn = Math.ceil(options.length / columns);
    const bootstrapClass = "col-md-".concat((12 / columns).toString());
    const htmlOptions = [];
    for (let i = (column - 1) * itemsPerColumn; i < column * itemsPerColumn; i++) {
      if (options[i]) {
        htmlOptions.push(renderOption(options[i]));
      }
    }

    return (
      <div key={`item-${column}`} className={bootstrapClass}>{htmlOptions}</div>
    );
  };

  const htmlCols = [];
  for (let i = 1; i <= columns; i++) {
    htmlCols.push(renderColumn(i));
  }

  return (
    <div className={s.CheckboxFilter}>
      <div className={s.CheckboxFilter_header}>
        <Checkbox label={props.selectAllLabel} value="2" checked={true} />
      </div>
      <div className={s.CheckboxFilter_content}>
        <div className="row">{htmlCols}</div>
      </div>
    </div>
  );
};
