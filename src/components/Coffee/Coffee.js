import React, { Component } from 'react';
import classNames from 'classnames/bind';
import style from './Coffee.scss';
import love from '../shared/image/public/love.png';
import { Modal, Button, Form, Image } from 'react-bootstrap';
import { connect } from 'react-redux';
import { diaryCoffee } from '../../redux';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

const cx = classNames.bind(style);

class Coffee extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alertShow: false,
      reviewShow: false,
      show: false,
      price:'',
      info:'',
      name:'',
      flavor:'',
      image: null
    }
  }

  handleClose = () => {
    this.setState({ show: false, reviewShow: false, alertShow: false });
  }

  writeReview = () => {
    if(this.props.name !== '') {
      this.setState({ reviewShow: true, show: false, alertShow: false })
    } else {
      this.setState({ show: false, alertShow: true})
    }
    
  }

  onSubmit = (e) => {
      e.preventDefault();
      let rating, comment;
      const { name, image } = this.state;

      if(this.rating === undefined) {
        rating = 1;
      } else {
        rating = this.rating;
      }
      comment = this.comment;
      const user = this.props.name.split(' ');

      if(comment !== '') {
        this.props.diaryCoffee({rating, comment, name, user: user[2], image})
      }
      this.comment='';
      toast.success('🦄 Review Complete', {
        autoClose: 5000,
        hideProgressBar: false
      })
      this.setState({ reviewShow: false})
    
  }

  coffeeClick = (e) => {
    let name=e.name;
    let price=e.price;
    let flavor=e.flavor;
    let info=e.description;
    let image=e.image;
      this.setState({
        show: true,
        price,
        info,
        name,
        flavor,
        image
      });
  }

  handleDragStart = (coffee) => {
    coffee.dataTransfer.setData('text/plain', coffee.target.alt);
  }

  coffeeDisplay = (coffees) => {
    return coffees.map((coffee,i) => {
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
    })
  }
  render() {
    const {exclusives, espresso, lungo, flavored, decaffe, masterCrafted} = this.props;
    const {show, name, image, price, flavor, info, reviewShow, alertShow} = this.state;

    return (
      <div className="nespresso">
        <h1>Coffee Capsules</h1>
          <div className={cx('capsules')}>
          <ToastContainer />
              <h3>Nespresso Exclusives</h3>
               <div className={cx('capsule')}>{this.coffeeDisplay(exclusives)}</div>
              <h3>Espresso</h3>
              <div className={cx('capsule')}>{this.coffeeDisplay(espresso)}</div>
              <h3>Lungo</h3>
              <div className={cx('capsule')}>{this.coffeeDisplay(lungo)}</div>
              <h3>Master Crafted Single Origins</h3>
              <div className={cx('capsule')}>{this.coffeeDisplay(masterCrafted)}</div>
              <h3>Flavored</h3>
              <div className={cx('capsule')}>{this.coffeeDisplay(flavored)}</div>
              <h3>Decaffeinato</h3>
              <div className={cx('capsule')}>{this.coffeeDisplay(decaffe)}</div>
          </div>

          <Modal show={show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{name} <img src={love} alt="love"/></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className='test'>
              <img className={cx('modalPic')} src={image} alt={name}/>
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
              {/* <Button variant="info" onClick={this.writeReview}>
                Write Review
              </Button> */}
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


          <Modal style={{backgroundColor: 'coral'}}show={alertShow} onHide={this.handleClose}>
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
    name: state.name
  }
}


const mapDispatchToProps = dispatch => {
  return{
    diaryCoffee: (diary) => dispatch(diaryCoffee(diary))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Coffee);

