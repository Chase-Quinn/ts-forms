import React, { Component } from 'react'

interface JSONProps{
    mainState: any
}
export default class JSONpage extends Component<JSONProps> {
    render() {
        const {mainState} = this.props
        return (
            <div className='col-12 bg-dark text-light'>
                Return all data as JSON: <br /> <br />
                <pre id='JSON'>{JSON.stringify(mainState)}</pre>
            </div>
        )
    }
}
