import React from 'react'

const Spinner = () => {

    const spinner = 'https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif'
    return (
        <img src={spinner} style={{width: '200px', margin: 'auto', display: 'block'}} alt='loading'/>
    )
}

export default Spinner
