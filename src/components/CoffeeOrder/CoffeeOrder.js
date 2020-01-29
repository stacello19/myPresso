import React, {Component} from 'react';
import garbage from '../shared/image/public/garbage.png';
import classNames from 'classnames/bind'
import style from './CoffeeOrder.scss'
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import Complete from '../Complete/Complete';
import {removeOrder, getOrderCapsule} from '../../redux/index';

const cx = classNames.bind(style)

class CoffeeOrder extends Component{
    constructor(props) {
        super(props)
        this.orderClose=this.orderClose.bind(this);
        this.state={orderShow: false}
    }

    componentDidMount() {
      console.log('coffee order mounted')   
      const orderingXX = sessionStorage.getItem('order');
      //GET할때 string
      const ordering = JSON.parse(orderingXX);
      this.props.orderCapsule(ordering);
    }

    componentDidUpdate() {
      console.log('coffee order update');
    }

    orderClose(index, e) {
      const target = e.target.parentNode.parentNode;
      target.innerHTML='';
      target.style.display='none'

      const orderingXX = sessionStorage.getItem('order');
      const ordering = JSON.parse(orderingXX);
      ordering.splice(index, 1);
      sessionStorage.setItem('order', JSON.stringify(ordering));
    }


    render() {
      const {order} = this.props;
      const {orderShow} = this.state;

      const date = new Date();
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const month = date.getMonth();
      const days = date.getDate();
      const year = date.getFullYear();
      
      
      const Orders = order.map((coffee, index) => {
        return(
              <tr key={index}>
                  <td>{coffee.name}</td>
                  <td>${coffee.price}</td>
                  <td>{months[month]} {days}, {year}</td>
                  <td><span>{coffee.qty}</span>
                      <img src={garbage} alt="garbage" onClick={(e) => this.orderClose(index, e, coffee.name)}/></td>
              </tr>
        )
      })

        return(
            <div className={cx('order')}>
                <h1>Coffee Order</h1>
            <table className={cx('coffeeOrder')}>
            <thead>
              <tr>
                <th scope="col">
                  <h4>Coffee Type</h4>
                </th>
                <th scope="col">
                  <h4>Price</h4>
                </th>
                <th scope="col">
                  <h4>Order Date</h4>
                </th>
                <th scope="col">
                  <h4>Cart</h4>
                </th>
              </tr>
            </thead>

            <tbody className={cx('body')}>
             { Orders }
            </tbody>
            </table>
            {order !== [] ? '': <h3>Order is empty..</h3> }
            <Button className={cx('orderBtn')} onClick={() => this.setState({orderShow: !orderShow})}>Add to History</Button>
            {orderShow ? <Complete/> : ''}
            </div>
        )
    }
}

const mapStateToProps = state => {
  return{
    order: state.order
  }
}

const mapDispatchToProps = dispatch => {
  return{
    resetOrder: order => dispatch(removeOrder(order)),
    orderCapsule: orders => dispatch(getOrderCapsule(orders))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeOrder);