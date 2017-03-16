import * as React from 'react';
import {Checkbox} from '../Checkbox/index';

const s = require('./style.css');

interface CheckboxFilterProps {
  selectAllLabel: string;
  options: Array<{ checked: boolean, label: string, value: any }>;
  columns: number;
  onChange(option: any): void;
}

const renderColumn = (column, props) => {
  const itemsPerColumn = Math.ceil(props.props.options.length / props.columns);
  const bootstrapClass = "col-md-".concat((12 / props.columns).toString());
  const htmlOptions = [];
  for (let i = (column - 1) * itemsPerColumn; i < column * itemsPerColumn; i++) {
    if (props.options[i]) {
      htmlOptions.push(renderOption(props.options[i], props.onChange));
    }
  }

  return (
    <div key={`item-${column}`} className={bootstrapClass}>{htmlOptions}</div>
  );
};

const renderOption = (option, onChange) => {
  return (
    <Checkbox
      key={Math.random()}
      checked={option.checked}
      label={option.label}
      value={option.value}
      onChange={onChange} />
  );
};

const handleToggleAll = () => {
  console.log('toggle all');
};

export const CheckboxFilter = (props: CheckboxFilterProps) => {

  const htmlCols = [];
  for (let i = 1; i <= props.columns; i++) {
    htmlCols.push(renderColumn(i, props));
  }

  return (
    <div className={s.CheckboxFilter}>
      <div className={s.CheckboxFilter_header}>
        <Checkbox
          checked={false}
          label={props.selectAllLabel}
          value="selectAll"
          onChange={handleToggleAll} />
      </div>
      <div className={s.CheckboxFilter_content}>
        <div className="row">{htmlCols}</div>
      </div>
    </div>
  );
};
