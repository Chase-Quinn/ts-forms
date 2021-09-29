import React, { Component } from 'react'

interface SubmitProps {
    label: string,
    setJSONpage: any
}


export default class Submit extends Component<SubmitProps> {
    render() {

        const {label, setJSONpage} = this.props

        return (
            <div className='form-group col-xl-5 col-md-11 text-center mt-4 mb-2'>
                <button onClick={e => setJSONpage(e)}>{label}</button>
            </div>
        )
    }
}
