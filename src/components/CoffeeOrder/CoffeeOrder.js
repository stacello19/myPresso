import React, {Component} from 'react';
import garbage from '../shared/image/public/garbage.png';
import classNames from 'classnames/bind'
import style from './CoffeeOrder.scss'
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import Complete from '../Complete/Complete';
import { orderDiaryCapsule } from '../../redux/index';

const cx = classNames.bind(style)

class CoffeeOrder extends Component{
    constructor(props) {
        super(props)
        this.orderClose=this.orderClose.bind(this);
        this.state={orderShow: false, newArr: null}
    }

    componentDidMount() {
      console.log('coffee order mounted');
    }

    componentDidUpdate(prevProps, prevState) {
      console.log('coffee order update');
    }

    orderClose(index, e, name) {
      const target = e.target.parentNode.parentNode;
      target.innerHTML='';
      target.style.display='none';
      let data = this.props.order;
      data = data.filter(order => order.name === name);
      this.props.setOrder(data);
    }
    render() {
      const { order } = this.props;

      const date = new Date();
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const month = date.getMonth();
      const days = date.getDate();
      const year = date.getFullYear();

      const orders = order.map((coffee, index) => {
        return(
              <tr key={index}>
                  <td>{coffee.name}</td>
                  <td>${coffee.price}</td>
                  <td>{months[month]} {days}, {year}</td>
                  <td><span>{coffee.orderNum}</span>
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
             {orders}
            </tbody>
            </table>

            <Button className={cx('orderBtn')} onClick={() => this.setState({orderShow: true})}>Order Complete</Button>
            {this.state.orderShow ? <Complete/> : ''}
            </div>
        )
    }
}

const mapStateToProps = state => {

  return{ 
    order: state.orderArr
  }
}

const mapDispatchToProps = dispatch => {
  return{
    setOrder: (order) => dispatch(orderDiaryCapsule(order))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CoffeeOrder);