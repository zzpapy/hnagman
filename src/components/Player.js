import React, { Component } from 'react'


class Player extends Component{
    constructor(props){
        super(props)
        const name = props.name
        const play = props.play
        const playing = props.playing
    }

    render(){
        console.log(this.props.id)
        return(
           <div className={this.props.playing ? 'play':''}>player : {this.props.nb}{this.props.playing}</div>
        )
    }
}

export default Player