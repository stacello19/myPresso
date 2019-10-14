import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import style from './Map.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(style);

const AnyReactComponent = ({ text }) => <div className={cx('marker')}>{text}</div>;

class Maps extends Component {
    constructor() {
        super();
        this.state={lat: null, lng: null}
    }
    componentWillMount(){
    if (!!navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.setState({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      },
      (err) => console.log(err),
      { enableHighAccuracy: true, timeout: 10000, maximumAge: 10000 },
      );
    } else {
      alert('navigator error')
    }
  }

  render() {
    return (
      <div style={{ height: '100vh', width: '50%' , border: '3px solid black'}}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAjqzO0MMyJpqTcMYRx6FvGrBAU0KqYa0A'}}
          defaultCenter={{lat: this.state.lat, lng: this.state.lng}}
          defaultZoom={12}
        >
          <AnyReactComponent
            lat={this.state.lat}
            lng={this.state.lng}
            text="Me"
          />
        </GoogleMapReact>
      </div>
    );
  }
}

export default Maps;