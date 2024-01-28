import React from 'react';
import css from './Header.module.scss';

export default function Header() {
  return (
    <>
      <div className={`bg-primary paddings ${css.wrapper}`}>
        <ul className={`flexCorner`}>
          <li><img src="./logo.jpg" alt="" /></li>
          <li className='primaryText'>Weather-Search</li>
        </ul>
      </div>
    </>
  )
}
