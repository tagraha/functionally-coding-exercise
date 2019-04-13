import React, { Component, Fragment } from 'react'

import ClapIcon from './ClapIcon';
import Response from './Response';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className="row center-xs">
          <div className="col-xs-6">
            <div className="box">
              <p className="main-text-content">
                Yeah, but I never picked a fight in my entire life. I just wanna use the phone. I'm gonna ram him
                I'm writing this down, this is good stuff. Stop it
              </p>

              <ul className="tags">
                <li>
                  <a className="label">Doc</a>
                </li>
                <li>
                  <a className="label">Marty McFly</a>
                </li>
                <li>
                  <a className="label">Time Travel</a>
                </li>
              </ul>

              <ClapIcon />
            </div>
          </div>
        </div>

        <div className="row center-xs">
          <div className="col-xs-6">
            <Response />
          </div>
        </div>
      </Fragment>
    );
  }
}
 
// function mapStateToProps(state) {
//   const { isFetching, apps } = state
//  
//   return {
//     isFetching,
//     apps
//   }
// }
//  
// export default connect(mapStateToProps)(App)

export default App;
