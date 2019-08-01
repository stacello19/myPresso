import React, {Component} from 'react';
import garbage from '../shared/image/public/garbage.png';
import classNames from 'classnames/bind'
import style from './CoffeeOrder.scss'

//TODO:after I close the order, it doesn't appear right awway when I try to add;

const cx = classNames.bind(style)

class CoffeeOrder extends Component{
    constructor(props) {
        super(props)
        this.orderClose=this.orderClose.bind(this);
    }

    componentDidMount() {
      console.log('coffee order mounted');
    }

    componentDidUpdate() {
      console.log('coffee order update');
    }

    orderClose(index, e) {
      const target = e.target.parentNode.parentNode;
      target.innerHTML='';
      target.style.display='none'
      this.props.orderInfo.splice(index, 1);
      console.log(this.props.orderInfo, index)
    }
    render() {
      const { orderInfo } = this.props;

      const date = new Date();
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      const month = date.getMonth();
      const days = date.getDate();
      const year = date.getFullYear();

      const order = orderInfo.map((coffee, index) => {
        console.log(index)
        return(
              <tr key={index}>
                  <td>{coffee.name}</td>
                  <td>${coffee.price}</td>
                  <td>{months[month]} {days}, {year}</td>
                  <td><span>{coffee.orderNum}</span>
                      <img src={garbage} alt="shoppingCart" onClick={(e) => this.orderClose(index, e)}/></td>
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
             {order}
            </tbody>
            </table>
            </div>
        )
    }
}

export default CoffeeOrder;