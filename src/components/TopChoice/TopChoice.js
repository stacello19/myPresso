import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './TopChoice.scss';

const cx = classNames.bind(style)

class TopChoice extends Component {
  constructor(props) {
    super(props)
    this.handleDrop=this.handleDrop.bind(this);
    this.state={
      name:[]
    }
  }
  componentDidUpdate() {
    console.log('component did update')
    console.log(this.state); //setState is async. either do componentDidUpdate or setState callback
  }
  handleDrop(coffee) {
    let data = coffee.dataTransfer.getData('text');
    coffee.target.innerHTML=data
    this.setState(prevState => ({
      name: [...prevState.name, data]
    }))
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
                      onDrop={(coffee) => this.handleDrop(coffee)}>Hawaii Kona</td>
              </tr>
              <tr>
                  <th scope="row">2</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee)}>Flat White Over Ice</td>
              </tr>
              <tr>
                  <th scope="row">3</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee)}>Chiaro</td>
              </tr>
              <tr>
                  <th scope="row">4</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee)}>Livanto</td>
              </tr>
              <tr>
                  <th scope="row">5</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee)}>Capriccio</td>
              </tr>
            </tbody>

          </table>
      </div>
    )
  }
}

export default TopChoice
