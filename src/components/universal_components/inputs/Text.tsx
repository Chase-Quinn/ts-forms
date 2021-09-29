import React, { Component } from 'react'

interface TextProps {
    label: string,
    name: string,
    onChangeFunction: any
}

export default class Text extends Component<TextProps> {
    render() {

        const {label, name, onChangeFunction} = this.props

        return (
            <div className='form-group col-xl-5 col-md-11'>
                <label htmlFor={name} className='form-label'>{label}</label>
                <input type='text' name={name} id={name} className='form-control' onChange={e => onChangeFunction(e)} />
            </div>
        )
    }
}
