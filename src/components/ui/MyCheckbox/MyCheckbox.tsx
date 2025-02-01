import React from 'react';

import { MyCheckboxProps } from './MyCheckbox.props';
import style from './MyCheckbox.module.scss';
import { ReactComponent as CheckMark } from '../../../assets/CheckMark.svg';

export const MyCheckbox = ({
  name,
  text,
  colorCheckbox,
  isSelected,
  handleSelect,
  handleSelectAll,
}: MyCheckboxProps) => {
  return (
    <li className={style.item} style={{ color: colorCheckbox }}>
      <label className={style.label}>
        {text && <span className={style.text}>{text}</span>}
        <input
          className={style.realInput}
          onChange={handleSelect || handleSelectAll}
          type="checkbox"
          checked={isSelected}
          name={name}
        />
        <span className={style.customCheckbox}>
          <CheckMark />
        </span>
      </label>
    </li>
  );
};
