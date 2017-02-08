import React from 'react';

export default class MyRentals extends React.Component {
  constructor(props) {
    super(props);
  }

  renderRentals() {
    return this.props.rentals.map((rental) => {
      return (
        <div key={rental.id} className="">
          <h3>{rental.title}</h3>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>My Listings</h1>
        {this.renderRentals()}
      </div>
    );
  }
}