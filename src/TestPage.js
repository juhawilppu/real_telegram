import React, { Component } from 'react';
import CircularProgress from 'material-ui/CircularProgress';

class TestPages extends Component {
  state = {
  }

  render() {
    return (
      <div>
            <CircularProgress size={80} thickness={5} />
      </div>
    );
  }
}

export default TestPage;