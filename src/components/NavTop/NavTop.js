import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './NavTop.scss';
import { Breadcrumb} from 'react-bootstrap';
import coffee from '../shared/image/public/coffee-grinder.png';
import shopping from '../shared/image/public/shopping-basket.png';
import {sentFb} from '../../redux/index';
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
    console.log('test!', this.props.name)
  }
  render() {
    // const navbarItems = [{label: 'MyCoffee', target: 'diary'}, {label: 'MyOrder', target:}]
    const {login} = this.state;

    const LoginSuccess = (name) => {
      return(
        <div className={cx('name')}>
          Welcome, Stacy!
        </div>
      )
    }
    const LoginNeed = () => {
      return(
        <form>
          Your Nickname:
          <input name='name' type='text' onChange={(e) => this.getName(e)} placeholder='coffeeLover' style={{marginLeft: '3px', borderRadius: '10px'}}/>
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
              {login ? LoginSuccess() : LoginNeed()}
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
    sentFb: (data) => dispatch(sentFb(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTop);