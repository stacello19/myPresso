import React, { Component } from 'react';
//import classNames from 'classnames/bind';
//import style from './Coffee.scss';

//const cx = classNames.bind(style);

class Coffee extends Component {

  render() {
    const {exclusives, espresso, lungo, flavored, decaffe, masterCrafted} = this.props;

    const Exclusives = exclusives.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
        />
      );
    });

    const Espresso= espresso.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
        />
      );
    });

    const Lungo = lungo.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
        />
      );
    });

    const MasterCrafted = masterCrafted.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
        />
      );
    });

    const Decaffe = decaffe.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
        />
      );
    });

    const Flavored = flavored.map((coffee, i) => {
      return(
        <img  
          key={i}
          alt={coffee.name}
          src={coffee.image}
        />
      );
    });

    return (
      <div className="nespresso">
        <h1>Coffee Capsules</h1>
          <h3>Exclusives</h3>
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
    )
  }
}

export default Coffee
