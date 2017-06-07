import React, { Component } from 'react';
import { database } from './firebase'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      newData: ''
    };

    this.dataRef = null;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.dataRef = database.ref('/WOWOWOW/lololol/hehehe');
    this.dataRef.on('value', (snapshot) => {
      this.setState({
        data:snapshot.val()
      });
    });
  }

  handleChange(e) {
    const newData = e.target.value;
    this.setState({
      newData
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    this.dataRef.push(this.state.newData);
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          { JSON.stringify(this.state.data, null, 2)}
        </p>
        <form className='App--form' onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.newData} onChange={this.handleChange}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default App;
