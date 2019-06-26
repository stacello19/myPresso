import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './NavTop.scss';

const cx = classNames.bind(style);

class NavTop extends Component {
  render() {
    return (
        <div className={cx('nav-wrapper')}>
          My Coffee Diary
      </div>
    )
  }
}

export default NavTop;