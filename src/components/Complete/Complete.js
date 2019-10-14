import React, { Component } from 'react';
import {connect} from 'react-redux';
import style from './Complete.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

class Complete extends Component {
  constructor() {
    super();
    this.state={qty: null, totalPrice: null}
  }
  componentDidMount() {
    const totalQty = this.props.order.reduce((acc, el) => {
      acc += Number(el.orderNum)
      return acc;
    },0);
    const totalP = this.props.order.reduce((acc, el) => {
      let track = Number(el.orderNum)*Number(el.price)
      acc += track;
      return acc;
    },0);
    this.setState({qty: totalQty, totalPrice: totalP})
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevProps.order.length !== this.props.order.length) {
      const totalQty = this.props.order.reduce((acc, el) => {
        acc += Number(el.orderNum)
        return acc;
      },0);
      const totalP = this.props.order.reduce((acc, el) => {
        let track = Number(el.orderNum)*Number(el.price)
        acc += track;
        return acc;
      },0);
      this.setState({qty: totalQty, totalPrice: totalP})
    }
  }

  render() {
    const {qty, totalPrice}= this.state;
    return (
      <div className={cx('complete')}>
        <h2>Order is Complete</h2>
        <div className={cx('orderInfo')}>
          <h4>Qty: {qty}</h4>
          <h4>Total Price: ${totalPrice}</h4>
        </div>
        <h2 className={cx('msg')}>Start a day with a cup of coffee! <span role='img'>☕</span></h2>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return{
    order: state.orderArr
  }
}

export default connect(mapStateToProps, null)(Complete);