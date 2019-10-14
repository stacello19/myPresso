import React, {Component} from 'react';
import style from './CoffeeDiary.scss';
import classNames from 'classnames/bind';
import { Card, CardColumns } from 'react-bootstrap';
import { connect } from 'react-redux'

const cx = classNames.bind(style);

class CoffeeDiary extends Component{
    constructor(props){
        super(props)
        this.cardClose=this.cardClose.bind(this);
    }
    componentDidMount() {
        console.log('CoffeeDiary mounted')
    }
    componentDidUpdate() {
        console.log('CoffeeDiary Update')
    }
    cardClose(index, coffee) {
        const target = coffee.parentNode.parentNode;
        target.innerHTML='';
        target.style.display='none'
    }

    render() {
        const { diary } = this.props;

        const date = new Date();
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
        const month = date.getMonth();
        const days = date.getDate();
        const year = date.getFullYear();

        const CardLoop = diary.map((coffee, index) => {
            return(
              <Card style={{borderColor: 'rgb(235, 86, 86)', textAlign: 'center'}}key={index}>
                <button onClick={(e) => this.cardClose(index, e.target)} type="button" className="close" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <Card.Img className={cx('cardImg')}variant="top" src={coffee.image} />
                <Card.Body>
                  <Card.Title><strong>{coffee.name}</strong></Card.Title>
                  <Card.Text>{coffee.comment}</Card.Text>
                  <Card.Text>Rating: {coffee.rating}/5</Card.Text>
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
                <CardColumns>{CardLoop}</CardColumns>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        diary: state.diaryArr
    }
}

export default connect(mapStateToProps, null)(CoffeeDiary);
