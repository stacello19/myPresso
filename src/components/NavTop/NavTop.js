import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './NavTop.scss';
import {sentFb, resetName, resetReview} from '../../redux/index';
import {connect} from 'react-redux';

const cx = classNames.bind(style);

class NavTop extends Component {
  constructor() {
    super();
    this.state={login: false, name: ''};
  }

  componentDidMount() {
    const user = sessionStorage.getItem('user');
    if(user) {
      this.props.sentFb({user: user})
      this.setState({login: true});
    }
  }

  getName = (e) => {
    this.setState({name: e.target.value});
  }
  handleClick = (e) => {
    e.preventDefault();
    sessionStorage.setItem('user', this.state.name);
    this.props.sentFb({user: this.state.name})
    this.setState({login: true});
  }

  logOutClick = () => {
    this.setState({login: false});
    this.props.resetName();
    this.props.resetReview();
    sessionStorage.clear();
  }

  render() {
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
    resetName: () => dispatch(resetName()),
    resetReview: () => dispatch(resetReview())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavTop);