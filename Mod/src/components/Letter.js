import React from 'react'

function Letter(props){

    const reveal = props.reveal
    const letter = props.letter
    return <span className={ reveal ? 'letter revealed' : 'letter' }>{ reveal ? letter : '_' }</span>
}

export default Letter