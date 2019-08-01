import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './Coffee.scss';
import love from '../shared/image/public/love.png';
import { Modal, Button, Form, Image } from 'react-bootstrap';

const cx = classNames.bind(style);

export class Coffee extends Component {
  constructor(props) {
    super(props)
    this.coffeeClick=this.coffeeClick.bind(this);
    this.handleClose=this.handleClose.bind(this);
    this.writeReview=this.writeReview.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.order=this.order.bind(this);
    this.submitOrder=this.submitOrder.bind(this);
    this.state = {
      orderShow: false,
      reviewShow: false,
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
    this.setState({ show: false, reviewShow: false, orderShow: false });
  }

  writeReview() {
    this.setState({ reviewShow: true, show: false })
  }

  order() {
    this.setState({ show: false, orderShow: true})
  }

  submitOrder(e) {
    e.preventDefault();
    let orderNum;
    if(this.orderNum !== undefined) {
      orderNum=this.orderNum;
      this.orderNum=1;
    } else {
      orderNum =1;
    }
    this.props.orderDataFromChild(orderNum, this.state.name, this.state.price)
    this.setState({orderShow: false})
  }
  onSubmit(e) {
    e.preventDefault();
    let rating, comment;
    if(this.rating === undefined) {
      rating = 1;
    } else {
      rating = this.rating;
    }
    comment = this.comment;
    if(comment !== '') {
      this.props.dataFromChild(rating, comment, this.state.name, this.state.image)//transfer to parent
    }
    this.comment='';
    this.setState({ reviewShow: false})
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

  handleDragStart(coffee) {
    coffee.dataTransfer.setData('text/plain', coffee.target.alt);
  }
  render() {
    const {exclusives, espresso, lungo, flavored, decaffe, masterCrafted} = this.props;
    const {show, name, image, price, flavor, info, reviewShow, orderShow} = this.state;

    //capsules mapping
    const Exclusives = exclusives.map((coffee, i) => {
      return(
        <img  
          draggable
          onDragStart={(coffee) => this.handleDragStart(coffee)}
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
          draggable
          onDragStart={(coffee) => this.handleDragStart(coffee)}  
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
          draggable
          onDragStart={(coffee) => this.handleDragStart(coffee)}  
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
          draggable
          onDragStart={(coffee) => this.handleDragStart(coffee)}  
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
          draggable
          onDragStart={(coffee) => this.handleDragStart(coffee)}  
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
          draggable
          onDragStart={(coffee) => this.handleDragStart(coffee)}  
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

          <Modal show={show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{name} <img src={love} alt="love"/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='test'>
              <img className={cx('modalPic')}src={image} alt={name}/>
              </div>
              <br />
              Price: ${price}
              <br />
              Flavor: {flavor}
              <br />
              Description: <div className="font-italic">{info}</div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="info" onClick={this.writeReview}>
                Write Review
              </Button>
              <Button variant="warning" onClick={this.order}>
                Order
              </Button>
            </Modal.Footer>
          </Modal>

          <Modal show={reviewShow} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{name} <img src={love} alt="love"/></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Image className='formImg' src={image}/>
                <Form.Group controlId="coffeeForm.ControlSelect1">
                  <Form.Label>Select Rating:</Form.Label>
                  <Form.Control onChange={(select)=> this.rating=select.target.value} as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Form.Control>
                </Form.Group>
                <Form.Group controlId="coffeeForm.ControlTextarea1">
                  <Form.Label>Write Review:</Form.Label>
                  <Form.Control onChange={(text) => this.comment=text.target.value}as="textarea" rows="3" />
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="info" onClick={this.onSubmit}>
                  Submit
                </Button>
              </Modal.Footer>
          </Modal>

          <Modal show={orderShow} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>{name} <img src={love} alt="love"/></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                  <Image className='formImg' src={image}/>
                <Form.Group controlId="coffeeForm.ControlSelect1">
                  <Form.Label>Select Order Amount:</Form.Label>
                  <Form.Control onChange={(num)=> this.orderNum=num.target.value} as="select">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </Form.Control>
                </Form.Group>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={this.handleClose}>
                  Close
                </Button>
                <Button variant="info" onClick={this.submitOrder}>
                  Submit
                </Button>
              </Modal.Footer>
          </Modal>
      </div>
    )
  }
}



