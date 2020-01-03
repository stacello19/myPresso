import React, { Component } from 'react';
import {connect} from 'react-redux';
import style from './Complete.scss';
import classNames from 'classnames/bind';
import {Table} from 'react-bootstrap';

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
    const date = new Date();
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    const month = date.getMonth();
    const days = date.getDate();
    const year = date.getFullYear();
    return (
      <div className={cx('complete')}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <td className={cx('date')}colSpan='4'>{months[month]} {days}, {year}</td>
            </tr>
            <tr>
              <th>#</th>
              <th>Coffee</th>
              <th>Qty</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Americano</td>
              <td>4</td>
              <td>$18</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Latte</td>
              <td>2</td>
              <td>$11</td>
            </tr>
            <tr>
              <td></td>
              <td colSpan='3'>Qty: {qty}  Price: ${totalPrice}</td>
            </tr>
          </tbody>
        </Table>
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