import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './TopChoice.scss';


const cx = classNames.bind(style)

class TopChoice extends Component {
  render() {
    return (
      <div className={cx('topChoice-Wrapper')}>
        topChoice
      </div>
    )
  }
}

export default TopChoice
