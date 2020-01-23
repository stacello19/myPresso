import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './TopChoice.scss';
import {sentTopFive} from '../../redux/index';
import {connect} from 'react-redux';

const cx = classNames.bind(style)

class TopChoice extends Component {
  constructor(props) {
    super(props)
    this.handleDrop=this.handleDrop.bind(this);
    this.state={
      coffee: {}
    }
  }
  componentDidUpdate(prevProps, prevState) {
    console.log('component did update')
    //setState is async. either do componentDidUpdate or setState callback
  }

  handleDrop(coffee, num) {
    let data = coffee.dataTransfer.getData('text');
    coffee.target.innerHTML=data

   // check if the number is same
   //Yes? take it out add new data
   //No ? just add new data
   const coffees = this.state.coffee
   for(let key in coffees) {
     if(key === num) delete coffees[key];
   }
   coffees[num] = data;
   this.setState({coffee: coffees}, () => {
     console.log(this.state.coffee)
   })
   this.props.sentTopFive(this.state.coffee);
  }
  render() {
    return (
      <div className={cx('topChoice-Wrapper')}>
          <table className={cx('table')}>
            <thead>
              <tr>
                <th scope="col"></th>
                <th scope="col">
                  <h1>This Week Top " 5 "...?</h1>
                  <p style={{fontSize: '20px'}}>--Drag Capsule here to make your own Top 5!--</p>
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                  <th scope="row">1</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee, 1)}>Hawaii Kona</td>
              </tr>
              <tr>
                  <th scope="row">2</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee, 2)}>Flat White Over Ice</td>
              </tr>
              <tr>
                  <th scope="row">3</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee, 3)}>Chiaro</td>
              </tr>
              <tr>
                  <th scope="row">4</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee, 4)}>Livanto</td>
              </tr>
              <tr>
                  <th scope="row">5</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee, 5)}>Capriccio</td>
              </tr>
            </tbody>

          </table>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//   return{
//     topfive: state.topfive
//   }
// }

const mapDispatchToProps = dispatch => {
  return{
    sentTopFive: (data) => dispatch(sentTopFive(data))
  }
}

export default connect(null, mapDispatchToProps)(TopChoice);

