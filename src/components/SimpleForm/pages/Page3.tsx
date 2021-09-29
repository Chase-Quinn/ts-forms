import React, { Component } from 'react'
import Submit from '../../universal_components/inputs/Submit'

interface PageThreeProps{
    setJSONpage: any
}

export default class PageThree extends Component<PageThreeProps> {
    render() {
        const {setJSONpage} = this.props

        return (
            <div className='row justify-content-center'>
                <p className='col-12 text-center'>This form will now take your entries and format them into JSON.</p>
                <br />
                <br />
                <p className='col-12 text-center'>Click the "Get JSON" button below to process the data.</p>

                <Submit label='Get JSON' setJSONpage={setJSONpage} />
            </div>
        )
    }
}