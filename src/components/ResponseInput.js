import React, { Component } from 'react';

class ResponseInput extends Component {
  constructor(props) {
    super(props);
    this.onTypeFn = this.onTypeFn.bind(this);
  }
  componentDidMount(){
    this.nameInput.focus();
  }
  onTypeFn() {
    if(event.key === 'Enter'){
      this.props.onHitEnter();
   }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          value={this.props.responseText}
          onChange={this.props.handleChange}
          onKeyPress={this.onTypeFn}
          className="response-input"
          placeholder="write a response and then press enter"
          ref={(input) => { this.nameInput = input; }} 
        />
      </div>
    )
  }
}

export default ResponseInput;
