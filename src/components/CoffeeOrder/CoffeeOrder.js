import React, {Component} from 'react';
import shopping from '../shared/image/public/shopping-basket.png';
import classNames from 'classnames/bind'
import style from './CoffeeOrder.scss'

const cx = classNames.bind(style)

class CoffeeOrder extends Component{
    // constructor(props) {
    //     super(props)
    // }

    render() {
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
                  <h4>Rating</h4>
                </th>
                <th scope="col">
                  <h4>Cart</h4>
                </th>
              </tr>
            </thead>

            <tbody className={cx('body')}>
              <tr>
                  <td>Hawaii Kona</td>
                  <td>5/5</td>
                  <td><input type="number" min="0" max="10"/>
                      <img src={shopping} alt="shoppingCart" onClick={() => console.log('clicked!')}/></td>
              </tr>
              <tr>
                  <td >Flat White Over Ice</td>
                  <td>4/5</td>
                  <td><input type="number" min="0" max="10"/>
                      <img src={shopping} alt="shoppingCart" onClick={() => console.log('clicked!')}/></td>
              </tr>
              <tr>
                  <td >Coffee 5</td>
                  <td>4/5</td>
                  <td><input type="number" min="0" max="10"/>
                      <img src={shopping} alt="shoppingCart" onClick={() => console.log('clicked!')}/></td>
              </tr>
              <tr>
                  <td >Espresso</td>
                  <td>4/5</td>
                  <td><input type="number" min="0" max="10"/>
                      <img src={shopping} alt="shoppingCart" onClick={() => console.log('clicked!')}/></td>
              </tr>
              <tr>
                  <td >Black Over Ice</td>
                  <td>4/5</td>
                  <td><input type="number" min="0" max="10"/>
                      <img src={shopping} alt="shoppingCart" onClick={() => console.log('clicked!')}/></td>
              </tr>
              <tr>
                  <td >Latte</td>
                  <td>4/5</td>
                  <td><input type="number" min="0" max="10"/>
                      <img src={shopping} alt="shoppingCart" onClick={() => console.log('clicked!')}/></td>
              </tr>
            </tbody>
            </table>
            </div>
        )
    }
}

export default CoffeeOrder;