import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './NavTop.scss';
import { Breadcrumb } from 'react-bootstrap';
import coffee from '../shared/image/public/coffee-grinder.png';
import shopping from '../shared/image/public/shopping-basket.png';

const cx = classNames.bind(style);

class NavTop extends Component {
  render() {
    return (
        <div className={cx('nav-wrapper')}>
          
          <div className="title">
            MyPresso
            <img className={cx('picture')}src={this.props.pic} alt='coffee'/>
          </div>
          
          <Breadcrumb>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#MyCoffee">MyCoffee<img src={coffee} alt="coffee"/></Breadcrumb.Item>
            <Breadcrumb.Item href="#MyOrder">MyOrder<img src={shopping} alt="shopping"/></Breadcrumb.Item>
          </Breadcrumb>
        </div>
    )
  }
}

export default NavTop;