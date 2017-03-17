import * as React from 'react';

const style = require('./style.css');

interface IProps {
  checked: boolean;
  name?: string;
  label: string;
  value: string;
  onChange(option: any): void;
}

export const Checkbox = (props: IProps) => {
  const handleClick = () => {
    const option = { ...props, checked: !props.checked };
    console.log(option);
    props.onChange(option);
  };

  return (
    <label className={style.Checkbox} onClick={handleClick}>
      <input
        className={style.CheckboxInput}
        type="checkbox"
        name={props.name}
        checked={props.checked}
        value={props.value} />
      <span className={style.CheckboxIcon} />
      <span className={style.CheckboxLabel}>{props.label}</span>
    </label>
  );
};
