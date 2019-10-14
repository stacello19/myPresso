import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './NavTop.scss';
import { Breadcrumb } from 'react-bootstrap';
import coffee from '../shared/image/public/coffee-grinder.png';
import shopping from '../shared/image/public/shopping-basket.png';

const cx = classNames.bind(style);

class NavTop extends Component {
  render() {
    // const navbarItems = [{label: 'MyCoffee', target: 'diary'}, {label: 'MyOrder', target:}]
    return (
        <div className={cx('nav-wrapper')}>
          
          <div className="title">
            MyPresso
            <img className={cx('picture')}src={this.props.pic} alt='coffee'/>
          </div>
          
          <Breadcrumb>
            <Breadcrumb.Item active>Home</Breadcrumb.Item>
            <Breadcrumb.Item href="#MyCoffee" onClick={() => window.scrollTo({top: 700, left: 0, behavior: 'smooth'})}>MyCoffee<img src={coffee} alt="coffee"/></Breadcrumb.Item>
            <Breadcrumb.Item href="#MyOrder" onClick={() => window.scrollTo({top: 1900, left: 0, behavior: 'smooth'})}>MyOrder<img src={shopping} alt="shopping"/></Breadcrumb.Item>
          </Breadcrumb>
        </div>
    )
  }
}

export default NavTop;