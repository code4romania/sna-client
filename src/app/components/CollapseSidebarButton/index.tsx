import * as React from 'react';

const style = require('./style.css');

interface Props {
  isOpen: boolean;
  openMenu: () => void;
}

/* tslint:disable:max-line-length jsx-self-close */
export const CollapseSidebarButton = (props: Props) => {
  const btnLabel = props.isOpen
    ? 'Ascunde Navigație'
    : 'Deschide Navigație';
  const svgRotate = props.isOpen
    ? ''
    : 'rotate(180) translate(-16, -17)';
    // ? (<path fill='#93A6B1' d='M11,16V13H21V11H11V8L7,12L11,16M3,20H5V4H3V20Z'/>)
    // : (<path fill='#93A6B1' d='M13,8V11H3V13H13V16L17,12L13,8M19,20H21V4H19V20Z'/>);

  return (
    <div onClick={props.openMenu} className={style.collapseExpandContainer}>
      <span
        className={`${props.isOpen ? style.collapseExpandContainerLabel : style.rotateContainerLabel}`}
      >{btnLabel}</span>
      <svg className={style.collapseExpandContainerIcon} width='16' height='17' viewBox='0 0 16 17'>
        {/*svgIcon*/}
        <title>Group 25</title>
        <g fill="#A5B3BB" fillRule="evenodd" transform={svgRotate}>
          <path d="M0 0h2v17H0z"/>
          <path d="M7.414 8l2.293-2.293c.39-.39.39-1.024 0-1.414-.39-.39-1.024-.39-1.414 0L3.586 9l4.707 4.707c.39.39 1.024.39 1.414 0 .39-.39.39-1.024 0-1.414L7.414 10H14.5c.552 0 1-.448 1-1s-.448-1-1-1H7.414z" fillRule="nonzero"/>
        </g>
      </svg>
    </div>
  );
};
