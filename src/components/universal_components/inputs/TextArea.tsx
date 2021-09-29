import React, { Component } from 'react'

interface TextAreaProps {
    label: string,
    name: string,
    onSelfDescriptionChange: any
}

export default class TextArea extends Component<TextAreaProps> {
    render() {

        const {label, name, onSelfDescriptionChange} = this.props

        return (
            <div className='form-group col-xl-5 col-md-11 mt-3'>
                <label htmlFor={name} className='form-label'>{label}</label>
                <textarea name={name} id={name} className='form-control' onChange={e => onSelfDescriptionChange(e)}/>
            </div>
        )
    }
}
