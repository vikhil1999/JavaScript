import React, { Component } from 'react';
import './FeedbackForm.css'; // Make sure to create this CSS file

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      submitted: false,
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRatingChange(event) {
    this.setState({ rating: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  render() {
    return (
      <div>
        {!this.state.submitted ? (
          <form onSubmit={this.handleSubmit}>
            <h2>Feedback Form</h2>
            <div className="rating-buttons">
              {Array.from({ length: 5 }, (_, index) => (
                <label key={index} className="rating-label">
                  <input
                    type="radio"
                    name="rating"
                    value={index + 1}
                    checked={this.state.rating === String(index + 1)}
                    onChange={this.handleRatingChange}
                    className="rating-input"
                  />
                  <span className="rating-span">{index + 1}</span>
                </label>
              ))}
            </div>
            <button type="submit">Submit</button>
          </form>
        ) : (
          <div>
            <h2>Thank you for your feedback!</h2>
            <p>Your rating: {this.state.rating}</p>
          </div>
        )}
      </div>
    );
  }
}

export default FeedbackForm;
