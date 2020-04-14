import React, {Component} from 'react';
import style from './CoffeeDiary.scss';
import classNames from 'classnames/bind';
import { Card, CardColumns } from 'react-bootstrap';
import { connect } from 'react-redux'
import { removedReview } from '../../redux/index';


const cx = classNames.bind(style);

class CoffeeDiary extends Component{
    constructor(props){
        super(props)
        this.state = {coffee: []}
    }
    componentDidMount() {
        console.log('CoffeeDiary mounted')
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('CoffeeDiary Update')

        if(prevProps.review !== this.props.review) {
            this.setState({coffee: this.props.review}, () =>{
                console.log(this.state.coffee)
            })
        }
    }
    cardClose = async(index, coffee) => {
        let name = this.state.coffee[index][1];
        const user = this.props.name.split(' ');
        this.props.removedReview({name: name, user: user[2]})
    }

    render() {
        const { coffee } = this.state;

        const date = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const month = date.getMonth();
        const days = date.getDate();
        const year = date.getFullYear();

        const CardLoop = coffee.map((review, index) => {
            return(
              <Card style={{borderColor: 'rgb(235, 86, 86)', textAlign: 'center'}}key={index}>
                <button onClick={(e) => this.cardClose(index, e.target)} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <Card.Img className={cx('cardImg')}variant="top" src={review[3]} />
                <Card.Body>
                  <Card.Title><strong>{review[1]}</strong></Card.Title>
                  <Card.Text>{review[2]}</Card.Text>
                  <Card.Text>Rating: {review[0]}/5</Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">Last updated {months[month]} {days}, {year}</small>
                </Card.Footer>
              </Card>
            )
        });
        return(
            <div className="diary">
                <h1>Coffee Diary</h1>
                {coffee !== [] ? <CardColumns>{CardLoop}</CardColumns> : ''}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        name: state.name,
        review: state.review
    }
}

const mapDispatchToProps = dispatch => {
    return{
      removedReview: (data) => dispatch(removedReview(data))
    }
  }
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeDiary);
