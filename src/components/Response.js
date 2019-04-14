import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'

import { submitResponse } from '../redux/actions'
import BubbleIcon from './BubbleIcon';
import ResponseInput from './ResponseInput';
import ResponseList from './ResponseList';

class Response extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseText: '',
      isResponseInputVisible: false,
    };

    this.inputChange = this.inputChange.bind(this);
    this.submitResponse = this.submitResponse.bind(this);
    this.toggleInputVisibility = this.toggleInputVisibility.bind(this);
  }

  inputChange(evt) {
    const text = evt.target.value;
    this.setState(() => {
      return {
        responseText: text
      }
    })
  }

  submitResponse() {
    const { dispatch } = this.props;
    const { responseText } = this.state;
    this.setState(() => {
      return {
        responseText: '',
        isResponseInputVisible: false,
      }
    })
    dispatch(submitResponse(responseText));
  }

  toggleInputVisibility() {
    const { isResponseInputVisible } = this.state;
    this.setState(() => {
      return {
        isResponseInputVisible: !isResponseInputVisible,
      };
    })
  }

  render() {
    const { responseText, isResponseInputVisible } = this.state;
    return (
      <Fragment>
        <div className="response-box-wrapper" onClick={this.toggleInputVisibility}>
          <h1 className="response-header">Response</h1>
          {!isResponseInputVisible &&
            <div className="response-box"> <BubbleIcon /> Write a response...</div>
          }
        </div>

        {isResponseInputVisible &&
          <ResponseInput
            handleChange={this.inputChange}
            responseText={responseText}
            onHitEnter={this.submitResponse}
          />
        }

        <div>
          <ResponseList responses={this.props.responses.value} />
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
  const { responses } = state;
 
  return {
    responses,
  }
}

export default connect(mapStateToProps)(Response);