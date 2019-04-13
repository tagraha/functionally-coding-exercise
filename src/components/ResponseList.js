import React, { Component, Fragment } from 'react';

class ResponseList extends Component {
  constructor(props) {
    super(props);
    this.construcResponseBox = this.construcResponseBox.bind(this);
  }
  construcResponseBox(response) {
    return (
      <div key={response.id} className="responses-box">
        <span className="flex">
          <img src="/media/ironman.jpg" className="responses-avatar" />
          <a href="javascript:void(0)" className="responses-author">Iron man</a>
        </span>
        <p className="responses-body">{response.data}</p>
      </div>
    );
  }
  render() {
    return (
      <Fragment>
        {this.props.responses.map((data, index) => this.construcResponseBox(data) )}
      </Fragment>
    )
  }
}

export default ResponseList;