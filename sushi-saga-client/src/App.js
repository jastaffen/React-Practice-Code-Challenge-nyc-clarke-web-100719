import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';
import MoneyForm from './components/MoneyForm';

// Endpoint!
const API = "http://localhost:3000/sushis"

class App extends Component {
  state = {
    sushis: [],
    i: 0,
    sushiIds: [],
    money: 50
  }


  handleMoreButtonClick = () => {
    if (this.state.i + 4 >= this.state.sushis.length) {
      this.setState({
        i: 0
      })
    } else {
      this.setState((prevState) => ({
        i : prevState.i + 4
      }))
    }
    
  }

  handleEatenClick = (id) => {
    if (!this.state.sushiIds.includes(id)) {
      let sushi = this.state.sushis.find(sushi => sushi.id === id)
      if (this.state.money > sushi.price) {
        this.setState({
          sushiIds: [...this.state.sushiIds,  sushi.id],
          money: this.state.money - sushi.price
        })
      } else {
        alert("You don't have enough money!")
      }
    }
    
  }

  handleMoneyChange = (e) => {
    this.setState({
      money: e.target.value
    })
  }

  componentDidMount() {
    fetch(API)
    .then(resp => resp.json())
    .then(sushiObjects => this.setState({sushis: sushiObjects}))
  }

  

  render() {
    console.log(this.state.sushis)
    return (
      <div className="app">
        <MoneyForm money={this.state.money} handleMoneyChange={this.handleMoneyChange}/>
        <SushiContainer sushis={this.state.sushis} conveyer={this.state.i} handleMoreButtonClick={this.handleMoreButtonClick} handleEatenClick={this.handleEatenClick} sushiIds={this.state.sushiIds}/>
        <Table money={this.state.money} sushiIds={this.state.sushiIds}/>
      </div>
    );
  }
}

export default App;