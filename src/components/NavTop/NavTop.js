import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './NavTop.scss';
import { Breadcrumb} from 'react-bootstrap';
import coffee from '../shared/image/public/coffee-grinder.png';
import shopping from '../shared/image/public/shopping-basket.png';
import {sentFb, resetName} from '../../redux/index';
import {connect} from 'react-redux';

const cx = classNames.bind(style);

class NavTop extends Component {
  constructor() {
    super();
    this.state={login: false, name: ''};
  }

  getName = (e) => {
    this.setState({name: e.target.value});
  }
  handleClick = (e) => {
    e.preventDefault();
    this.props.sentFb({user: this.state.name})
    this.setState({login: true});
  }
  logOutClick = () => {
    console.log('out')
    this.setState({login: false});
    this.props.resetName();
  }

  render() {
    // const navbarItems = [{label: 'MyCoffee', target: 'diary'}, {label: 'MyOrder', target:}]
    const {login} = this.state;

    const LoginSuccess = (name) => {
      return(
        <div className={cx('name')}>
          {name}
          <button className={cx('btnOk')} style={{marginLeft: '10px'}}onClick={this.logOutClick}>Log Out</button>
        </div>
      )
    }
    const LoginNeed = () => {
      return(
        <form>
          Your Nickname:
          <input className={cx('inputBox')} name='name' type='text' onChange={(e) => this.getName(e)} placeholder='coffeeLover'/>
          <button className={cx('btnOk')} onClick={this.handleClick}>✓</button>
        </form>
      )
    }
    return (
        <div className={cx('nav-wrapper')}>
          
          <div className="title">
            <div>
            MyPresso
            <img className={cx('picture')}src={this.props.pic} alt='coffee'/>
            </div>
            <div className={cx('login')}>
              {login ? LoginSuccess(this.props.name) : LoginNeed()}
            </div>
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

const mapStateToProps = state => {
  return{
    name: state.name
  }
}

const mapDispatchToProps = dispatch => {
  return{
    sentFb: (data) => dispatch(sentFb(data)),
    resetName: () => dispatch(resetName())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTop);