import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './TopChoice.scss';


const cx = classNames.bind(style)

class TopChoice extends Component {
  render() {
    return (
      <div className={cx('topChoice-Wrapper')}>
        <h1>Top Five</h1>
        <ul className={cx('list')}>
          <li>1. Hawaii Kona</li>
          <li>2. Flat White Over Ice(Limited Edition)</li>
          <li>3. Chiaro</li>
          <li>4. Livanto</li>
          <li>5. Capriccio</li>
        </ul>
      </div>
    )
  }
}

export default TopChoice
