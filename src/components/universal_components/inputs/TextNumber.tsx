import React, { Component } from 'react'

interface TextNumberProps {
    label: string,
    name: string,
    onAgeChange: any
}

export default class TextNumber extends Component<TextNumberProps> {
    render() {

        const {label, name, onAgeChange} = this.props

        return (
            <div className='form-group col-xl-5 col-md-11'>
                <label htmlFor={name} className='form-label'>{label}</label>
                <input type='number' name={name} id={name} className='form-control' onChange={e => onAgeChange(e)} />
            </div>
        )
    }
}
