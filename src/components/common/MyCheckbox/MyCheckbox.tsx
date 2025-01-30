import React, { useState } from 'react';

import { MyCheckboxProps } from './MyCheckbox.props';
import style from './MyCheckbox.module.scss';
import { ReactComponent as CheckMark } from '../../../assets/CheckMark.svg';

export const MyCheckbox = ({ inputId, name, text, colorCheckbox }: MyCheckboxProps) => {
  const [isChecked, setIsChecked] = useState(false);
  const handleChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <li className={style.item} style={{ color: colorCheckbox }}>
      <label className={style.label} htmlFor={inputId}>
        {/* <span className={style.circle}></span> */}
        {text && <span className={style.text}>{text}</span>}
        <input
          className={style.realInput}
          onChange={handleChecked}
          type="checkbox"
          checked={isChecked}
          id={inputId}
          name={name}
        />
        <span className={style.customCheckbox}>
          <CheckMark />
        </span>
      </label>
    </li>
  );
};
