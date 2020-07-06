import React, {Component} from 'react'
import {LetterH, LetterW} from './Letter'

const words = ["toto","tata","tutu"]
class Word extends Component{
    state = {
        word: words[Math.floor(Math.random() * this.words.length())],
        clicked : false
    }
    handleClick = () =>{
        this.setState({
            
                clicked :true
        })
    }
    render(){
        const {name, surname} = this.props
        
        return(
            <div>
                <div>{name} {surname}</div>
                <LetterH onClick = {this.handleclick} />
                <LetterW />
                <div>{this.state.clicked ? 'ok' : 'non'}</div>
            </div>
        )
    }
}

export default Word

