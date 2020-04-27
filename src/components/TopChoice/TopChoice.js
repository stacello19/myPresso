import React, { Component } from 'react';
import classNames from 'classnames/bind'
import style from './TopChoice.scss';
import {sentTopFive} from '../../redux/index';
import {connect} from 'react-redux';
import { Modal, Button} from 'react-bootstrap';

const cx = classNames.bind(style)

class TopChoice extends Component {
  constructor(props) {
    super(props)
    this.state={
      coffee: {'one': 'Hawaii Kona', 'two': 'Flat White Over Ice', 'three': 'Chiaro', 'four': 'Livanto', 'five': 'Capriccio', 'user': ''},
      one: '',
      two: '',
      three: '',
      four: '',
      five: '',
      check: false,
      alertShow: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log('component did update', this.props.name, this.props.topfive)
    //setState is async. either do componentDidUpdate or setState callback

    if(prevProps.topfive !== this.props.topfive) {
      let topfive= this.props.topfive
      this.setState({one: topfive[0], two: topfive[1], three: topfive[2], four: topfive[3], five: topfive[4]}, () =>{
        console.log(this.state.one, this.state.two, this.state.three, this.state.four, this.state.five)
      })
    }

    if(prevProps.name !== this.props.name && this.props.name === '') {
      this.setState({one: '', two: '', three: '', four: '', five:''}, () => {
        console.log(this.state.one, this.state.two, this.state.three, this.state.four, this.state.five)
      })
    }
  }
  handleClose = () => {
    this.setState({ alertShow: false });
  }
  handleDrop = (coffee, num) => {
    let data = coffee.dataTransfer.getData('text');
    coffee.target.innerHTML=data

   const coffees = this.state.coffee
   const user = this.props.name.split(' ');

   if(user[0] === "") {
     this.setState({alertShow: true}, () => {
       console.log(this.state.alertShow)
     })
   } else {
    //filter coffee
    for(let key in coffees) {
      if(key === num) delete coffees[key];
      if(key === 'user') {
        coffees[key] = user[user.length-1]
      }
    }
    coffees[num] = data;

    //setstate the coffee state
    this.setState({coffee: coffees}, () => {
      console.log(this.state.coffee)
    })

    //send to redux (for AWS)
    this.props.sentTopFive(this.state.coffee);
   }
  }
  render() {
    const {one, two, three, four, five, alertShow} = this.state
    return (
      <div className={cx('topChoice-Wrapper')}>
        <h1>Your Top "5"</h1>
        <p>Drag Capsule here to make your own Top 5!</p>
          <table className={cx('table')}>

            <tbody>
              <tr>
                  <th scope="row">1</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee, 'one')}>{one}</td>
              </tr>
              <tr>
                  <th scope="row">2</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee, 'two')}>{two}</td>
              </tr>
              <tr>
                  <th scope="row">3</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee, 'three')}>{three}</td>
              </tr>
              <tr>
                  <th scope="row">4</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee, 'four')}>{four}</td>
              </tr>
              <tr>
                  <th scope="row">5</th>
                  <td onDragOver={(e) => e.preventDefault()}
                      onDrop={(coffee) => this.handleDrop(coffee, 'five')}>{five}</td>
              </tr>
            </tbody>

          </table>

          <Modal style={{backgroundColor: 'coral'}} show={alertShow} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Log In Alert</Modal.Title>
            </Modal.Header>
            <Modal.Body>Please Log in first to use the website :)</Modal.Body>
            <Modal.Footer>
              <Button variant="danger" onClick={this.handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return{
    name: state.name,
    topfive: state.topfive
  }
}

const mapDispatchToProps = dispatch => {
  return{
    sentTopFive: (data) => dispatch(sentTopFive(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TopChoice);

