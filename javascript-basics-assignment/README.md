import React, { Component } from 'react';

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
            <div>
              <label>
                How would you rate our service?
                <br />
                <input
                  type="radio"
                  name="rating"
                  value="1"
                  checked={this.state.rating === '1'}
                  onChange={this.handleRatingChange}
                />{' '}
                1
                <input
                  type="radio"
                  name="rating"
                  value="2"
                  checked={this.state.rating === '2'}
                  onChange={this.handleRatingChange}
                />{' '}
                2
                <input
                  type="radio"
                  name="rating"
                  value="3"
                  checked={this.state.rating === '3'}
                  onChange={this.handleRatingChange}
                />{' '}
                3
                <input
                  type="radio"
                  name="rating"
                  value="4"
                  checked={this.state.rating === '4'}
                  onChange={this.handleRatingChange}
                />{' '}
                4
                <input
                  type="radio"
                  name="rating"
                  value="5"
                  checked={this.state.rating === '5'}
                  onChange={this.handleRatingChange}
                />{' '}
                5
              </label>
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



## Problem Instructions

1.  You are given five problems in this assignment to solve which shall be available in `./solutions` directory  
2.  Test cases for three of these problems could be find in `./test` directory which validates the solution and you shall ensure that all of them pass before you submit your code for an automated review (steps shared below)  
    
    To run test cases locally, you shall execute -  
    `npm install`  
    `npm run test`  
3.  Rest of the two problems are open-ended and shall be reviewed only manually  
4.  You shall also fix any eslint errors if present in code. To run eslint check locally, you can execute `npm run eslint`  
5.  Once you have fixed all test cases and eslint errors, you need to submit your solution for an automated review as described below.  

## Submitting your solution for preliminary automated review

1.  Open [https://hobbes.stackroute.in/#/](https://hobbes.stackroute.in/#/) and login into the platform  
2.  Under `Assignment repository` select `javascript-basics-assignment`, and branch master  
3.  Under `Your solution repository` select your own repository and branch  
4.  Press Submit  
5.  Press click here for the feedback  
6.  Evaluation will take around 2 mins to complete after which you need to refresh your browser and get the updated status  
7.  Watch out for your total score and detailed status on each test and eslint errors in the coloured blocks on the screen  
8.  Fix failing test cases as well as eslint errors and re-submit your solution until you get 100%  

## MENTORS TO BEGIN REVIEW YOUR WORK ONLY AFTER ->

- You add the respective Mentor as a Reporter/Master into your Assignment Repository

- You have checked your Assignment on the Automated Evaluation Tool - Hobbes (Check for necessary steps in your Boilerplate - README.md file. ) and got the required score - Check with your mentor about the Score you must achieve before it is accepted for Manual Submission.

- Intimate your Mentor on Slack and/or Send an Email to learner.support@stackroute.in - with your Git URL - Once you are done working and are ready for final submission.
