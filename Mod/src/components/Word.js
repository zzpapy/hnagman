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
    state = {
        usedLetters : [],
        letters : [],
        rest: -1,
        isError : false
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
        this.setState({
            usedLetters : usedLetters,
            isError : error
        })
        this.generateWord()
    }
    generateWord = () => {
        let letters = []
        let rest = 0
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
        
        this.setState({
            letters: letters,
            rest: rest
        })
    }
    componentDidMount(){
        window.addEventListener('keyup', (e) => {
            this.playLetter(e.key.toUpperCase())
        })
        this.generateWord()
    }
    render(){
        return(
            <div id="wordBlock" className={ this.state.rest === 0 ? 'finished' : ''}>
                <p className={ this.state.isError ? 'error' : ''}>{ this.state.letters }</p>
            </div>
        )
    }
}

export default Word