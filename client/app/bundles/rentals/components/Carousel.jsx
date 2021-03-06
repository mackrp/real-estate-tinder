import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactSwipe from 'react-swipe';


export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
  }

  next() {
    this.refs.reactSwipe.next();
  }

  prev() {
    this.refs.reactSwipe.prev();
  }


  renderRentals() {
    return this.props.rentors.map((rental) => {
      return (
        <div key={rental.id} className="ui card">
          <div className="content">
            <div className="header">{rental.title}</div>
            <a href="/rentals/1">See More Details</a>
            <div className="meta">
              <a>{rental.address}</a>
            </div>
            <div className="description">
              {rental.property_type}
            </div>
          </div>
          <div className="extra content">
            <span className="right floated">
              Posted by {rental.rentor.email}
            </span>
            <span>
              <i className="user icon"></i>
              Posted on {rental.created_at.slice(0, 10)}
            </span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="center your-daddy">
        <ReactSwipe ref="reactSwipe" className="swipeable" swipeOptions={{continuous: true }}>
          {this.renderRentals()}
        </ReactSwipe>
        <div className="ui center aligned container">
          <div className="ui large buttons">
            <button className="ui button" onClick={::this.next}>Dislike</button>
              <div className="or"></div>
            <button className="ui button" onClick={::this.next}>Like</button>
          </div>
        </div>
      </div>
    );
  }
}
