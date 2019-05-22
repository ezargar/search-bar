import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor() {
    super()
    this.state = { text: '', content: [] }
  }

  filterFunction = (event) => {
    const { value } = event.target
    const currentValue = ["home", "about", "contacts", "con"]
    let current = []
    currentValue.forEach(function (content) {
      if (content.includes(value)) {
        current.push(content)
      }
    })
    this.setState({ content: current })
  }

  render() {

    const { text, content } = this.state
    return (
      <div class="dropdown">
        <center>
          <div id="myDropdown" class="dropdown-content">
            <input type="text" placeholder="Search.."
              value={text} id="myInput"
              onChange={event => this.setState({ text: event.target.value })}
              onKeyPress={this.filterFunction} />
            {content.map((value) =>
              <a>{value}</a>
            )}
          </div>
        </center>
      </div>
    );
  }
}

export default App;
