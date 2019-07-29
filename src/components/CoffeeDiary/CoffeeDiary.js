import React, {Component} from 'react';
import style from './CoffeeDiary.scss';
import classNames from 'classnames/bind';
import { Card, CardColumns } from 'react-bootstrap';

const cx = classNames.bind(style);

class CoffeeDiary extends Component{
    constructor(props){
        super(props)
        console.log('hello')
    }
    render() {
        const { espresso } = this.props;

        const CardLoop = espresso.map((coffee) => {
            return(
              <Card style={{borderColor: 'rgb(235, 86, 86)', textAlign: 'center'}}key={coffee.id}>
                <Card.Img className={cx('cardImg')}variant="top" src={coffee.image} />
                <Card.Body>
                  <Card.Title><strong>{coffee.name}</strong></Card.Title>
                  <Card.Text>{coffee.description}</Card.Text>
                  <Card.Text>Rating: 4/5</Card.Text>
                </Card.Body>
                <Card.Footer className="footer">
                  <small className="text-muted">Last updated 3 mins ago</small>
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

export default CoffeeDiary;