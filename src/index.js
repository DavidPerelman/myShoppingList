import React from 'react';
import ReactDOM from 'react-dom';

import './myStyles.css';

class App extends React.Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="app">
          <h1>Welcome To App</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
