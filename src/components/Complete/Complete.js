import React, { Component } from 'react';
import {connect} from 'react-redux';
import style from './Complete.scss';
import classNames from 'classnames/bind';
import {Table} from 'react-bootstrap';
import {allOrdered} from '../../redux/index';
 
const cx = classNames.bind(style);
 
class Complete extends Component {
 constructor() {
   super();
   this.state={orders: []}
 }
 componentDidMount = async() => {
   const user = this.props.user.split(' ')
   this.props.allOrdered({user: user[2], allorder: true});
 }
 
 componentDidUpdate(prevProps, prevState) {
   console.log(this.props.order)
   if(prevProps.order !== this.props.order) {
     const order = this.props.order.sort((a,b) => b.createdAt-a.createdAt)
     this.setState({orders: order}, () => {
       console.log(this.state.orders)
     })
   }
 }
 
 render() {
   const {orders} = this.state;
 
   const OrderHisotry = orders.map((coffee, index) => {
     let num = coffee.price*coffee.qty
     return(
           <tr key={index}>
               <td>{index}</td>
               <td>{coffee.createdAt}</td>
               <td>{coffee.name}</td>
               <td>{coffee.qty}</td>
               <td>${num.toFixed(2)}</td>
           </tr>
     )
   })
   return (
     <div className={cx('complete')}>
       <Table striped bordered hover>
         <thead className={cx('heading')}>
           <tr>
             <th>#</th>
             <th>Date</th>
             <th>Coffee</th>
             <th>Qty</th>
             <th>Price</th>
           </tr>
         </thead>
         <tbody>
         {OrderHisotry}
         </tbody>
       </Table>
     </div>
   );
 }
}
 
const mapStateToProps = state => {
 return{
   order: state.allorder,
   user: state.name
 }
}
 
const mapDispatchToProps = dispatch => {
 return{
   allOrdered: order => dispatch(allOrdered(order))
 }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Complete);