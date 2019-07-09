import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './Coffee.scss';
import love from '../shared/image/public/love.png';
import { Modal, Button } from 'react-bootstrap';

const cx = classNames.bind(style);

class Coffee extends Component {
  constructor(props) {
    super(props)
    this.coffeeClick=this.coffeeClick.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.state = {
      show: false,
      price:'',
      info:'',
      name:'',
      flavor:'',
      image: null
    }
  }

  componentDidMount() {
    console.log('component did mount');
  }

  componentDidUpdate() {
    console.log('component did update')
    console.log(this.state); //setState is async. either do componentDidUpdate or setState callback
  }

  handleClose() {
    this.setState({ show: false });
  }

  coffeeClick(e) {
    let name=e.name;
    let price=e.price;
    let flavor=e.flavor;
    let info=e.description;
    let image=e.image;
      this.setState({
        show: true,
        price: price,
        info: info,
        name: name,
        flavor: flavor,
        image: image
      });
  }
  render() {
    const {exclusives, espresso, lungo, flavored, decaffe, masterCrafted} = this.props;

    //capsules mapping
    const Exclusives = exclusives.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
          onClick={() => this.coffeeClick(coffee)} //to limit the setState num
        />
      );
    });

    const Espresso= espresso.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
          onClick={() => this.coffeeClick(coffee)}
        />
      );
    });

    const Lungo = lungo.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
          onClick={() => this.coffeeClick(coffee)}
        />
      );
    });

    const MasterCrafted = masterCrafted.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
          onClick={() => this.coffeeClick(coffee)}
        />
      );
    });

    const Decaffe = decaffe.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
          onClick={() => this.coffeeClick(coffee)}
        />
      );
    });

    const Flavored = flavored.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
          onClick={() => this.coffeeClick(coffee)}
        />
      );
    });

    return (
      <div className="nespresso">
        <h1>Coffee Capsules</h1>
          <div className={cx('capsules')}>
            <h3>Nespresso Exclusives</h3>
              {Exclusives}
            <h3>Espresso</h3>
              {Espresso}
            <h3>Lungo</h3>
              {Lungo}
            <h3>Master Crafted Single Origins</h3>
              {MasterCrafted}
            <h3>Flavored</h3>
              {Flavored}
            <h3>Decaffeinato</h3>
              {Decaffe}
          </div>

          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{this.state.name} <img src={love} alt="love"/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='test'>
              <img className={cx('modalPic')}src={this.state.image} alt={this.state.name}/>
              </div>
              <br />
              Price: ${this.state.price}
              <br />
              Flavor: {this.state.flavor}
              <br />
              Description: <div className="font-italic">{this.state.info}</div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="info" onClick={this.handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>

      </div>
    )
  }
}

export default Coffee
