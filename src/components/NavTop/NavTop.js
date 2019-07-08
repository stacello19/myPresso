import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './NavTop.scss';

const cx = classNames.bind(style);

class NavTop extends Component {
  render() {
    return (
        <div className={cx('nav-wrapper')}>
          MyPresso
          <img className={cx('picture')}src={this.props.pic} alt='coffee'/>
      </div>
    )
  }
}

export default NavTop;