import React, { Component } from 'react';
import './App.css';
import Display from '../Display/Display';
import Form from '../Form/Form';
import List from '../List/List';


class App extends Component {
  constructor(){
    super();
    this.state = {
      firstList: [],
      secondList: []
    }
  }

  addFirstValueToList = (value) => {
    this.setState((prevState) => {
      return {
        firstList: [
          ...prevState.firstList,
          {
            key: Date.now(),
            name: value
          }
        ]
      }
    })
  }

  addSecondValueToList = (value) => {
    this.setState((prevState) => {
      return {
        secondList: [
          ...prevState.secondList,
          {
            key: Date.now(),
            name: value
          }
        ]
      }
    })
  }


  render() {
    const { firstList, secondList } = this.state

    return (
      <div className="App">
        <Display 
        firstValueLength={firstList.length}
        secondValueLength={secondList.length}
        />
        <div className='form-container'>
        <Form setValue={this.addFirstValueToList}/>
        <Form setValue={this.addSecondValueToList}/>
        </div>
        <div className="list-container">
        <List list={firstList}/>
        <List list={secondList}/>
        </div>
      </div>
    );
  }
}

export default App;
