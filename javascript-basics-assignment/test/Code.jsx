import React, { Component } from 'react';
import './FeedbackForm.css'; // Make sure to create this CSS file

class FeedbackForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 0,
      submitted: false,
      feedback: '',
    };

    this.handleRatingChange = this.handleRatingChange.bind(this);
    this.handleFeedbackChange = this.handleFeedbackChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBack = this.handleBack.bind(this);
  }

  handleRatingChange(event) {
    this.setState({ rating: event.target.value, submitted: false });
  }

  handleFeedbackChange(event) {
    this.setState({ feedback: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({ submitted: true });
  }

  handleBack() {
    this.setState({ submitted: false, feedback: '' });
  }

  render() {
    return (
      <div className="feedback-container">
        {!this.state.submitted ? (
          <form>
            <h2>Feedback Form</h2>
            <div className="rating-buttons">
              {Array.from({ length: 5 }, (_, index) => (
                <button
                  type="button"
                  key={index}
                  className="rating-button"
                  onClick={() => this.handleRatingChange({ target: { value: index + 1 } })}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </form>
        ) : (
          <div className="feedback-popup">
            <p>You chose {this.state.rating}.</p>
            <p>Please provide feedback on how we can improve.</p>
            <textarea
              value={this.state.feedback}
              onChange={this.handleFeedbackChange}
              placeholder="Type your answer here..."
              rows="4"
            />
            <div className="feedback-actions">
              <button type="button" onClick={this.handleBack}>Back</button>
              <button type="button" onClick={this.handleSubmit}>Submit</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default FeedbackForm;
