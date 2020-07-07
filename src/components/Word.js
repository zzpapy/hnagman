import React, { Component } from 'react'

import Letter from './Letter'

const WORDS = [
    'TROMPETTE',
    'SAXOPHONE',
    'VIOLON',
    'CELESTA',
    'HARMONIUM',
    'MELLOTRON'
]

const WORD = WORDS[Math.floor(Math.random() * WORDS.length)];

class Word extends Component {
    constructor(props){
        super(props)
        this.state = {
            usedLetters : [],
            letters : [],
            rest: -1,
            isError : false,
            used:[],
            tries : 10,
            revealLetters : []
        }
        
      }
      resetWord = () => {
        this.setState({
            usedLetters : [],
            letters : [],
            rest: -1,
            isError : false,
            used:[]
        })
      }
    
    playLetter = (letter) => {
        let usedLetters = this.state.usedLetters
        let error = false
        if(usedLetters.indexOf(letter) === -1){
            usedLetters.push(letter)
        }
        else{
            error = true
        }
        let tries = this.state.tries - 1
        console.log(tries)
        if(tries <= 0){
            this.resetWord()
        }
        this.setState({
            usedLetters : usedLetters,
            isError : error,
            tries: tries
        })
        this.generateWord()
    }
   
    generateWord = () => {
        let letters = []
        let rest = 0
        let used = []
        for(let i = 0; i < WORD.length; i++){
            let letter = WORD.charAt(i)
            let reveal = this.state.usedLetters.indexOf(letter) !== -1 ? true : false
            rest = !reveal ? rest + 1 : rest
            letters.push(
                <Letter key={i}
                    reveal={ reveal } 
                    letter={ letter }
                />
            )
        }
        for(let i = 0; i < this.state.usedLetters.length; i++){
        used.push(
            <Letter key={i}
                reveal={ true } 
                letter={ this.state.usedLetters[i] }
            />
        )
        }
        this.setState({
            letters: letters,
            rest: rest,
            used: used
        })
    }
    refreshPage(){
        window.location.reload()
    }
    componentDidMount(){
        window.addEventListener('keyup', (e) => {
            this.playLetter(e.key.toUpperCase())
        })
        this.generateWord()
    }
    render(){
        if(this.state.tries > 0 || this.state.rest === 0 ){
            return(
                <div>
                    <h1>PENDU</h1>
                    <div id="wordBlock" className={ this.state.rest === 0 ? 'finished' : ''}>
                        <p className={ this.state.isError ? 'error' : ''}>
                            { this.state.letters }
                        </p>
                        <p>nbr de coups restants : {this.state.tries}</p>
                    </div>
                    <div id="wordBlock" className={ this.state.rest === 0 ? 'finished' : ''}>
                            <h2>Lettres déjà utilisées : </h2>
                        <p>{ this.state.used }</p>
                        <p>
                        <button onClick={this.refreshPage} type="button">Rejouer</button>
                            {/* <button onClick={this.resetWord} type="button">Rejouer</button> */}
                        </p>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div id="wordBlock" >
                    <p>Vous avez perdu</p>
                    <p >
                    Le mot à trouver était : {WORD}
                    </p>
                    <p>
                        <button onClick={this.refreshPage} type="button">Rejouer</button>
                    </p>
                </div>
            )
        }
    }
}

export default Word