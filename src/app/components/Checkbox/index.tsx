import * as React from 'react';

const style = require('./style.css');

interface CheckboxProps {
  checked: boolean;
  name?: string;
  label: string;
  value: string;
}

export const Checkbox = (props: CheckboxProps) => (
  <label className={style.Checkbox}>
    <input className={style.CheckboxInput} type="checkbox" name={props.name} value={props.value} />
    <span className={style.CheckboxIcon} />
    <span className={style.CheckboxLabel}>{props.label}</span>
  </label>
);
