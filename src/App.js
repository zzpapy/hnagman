import React, { Component } from 'react'
import './App.css';

import Word from './components/Word'
import Player from './components/Player'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
       nbPlayers:[],
       value: ""
    }
    this.inputChangedHandler = this.inputChangedHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    let players = []
    event.preventDefault();
    let playing = false
    for(let i=1;i <= event.target.nb.value;i++){
      if(i===1){
        playing= true
      }
      else{
        playing = false
      }
      players.push(
        <Player className={playing} key={i} nb={i} playing={playing} id={i}/>
        )
        console.log(playing);
      }
      this.setState({nbPlayers:players})
  }

  register(e){
    e.preventDefault()
    console.log(this)
  }
  inputChangedHandler = (e) => {
    const updatedKeyword = e.target.value;
    console.log(e.target.value)
    // May be call for search result
}
  render(){
    return (
      <main>
        <Word/>
        {this.state.nbPlayers}
        <form onSubmit={this.handleSubmit}>
          <input 
          onChange={(e)=>this.inputChangedHandler(e)}
          type="number" name="nb"
          />
          <button type="submit" >valider</button>
        </form>
      </main>
    );

  }
}

export default App;
