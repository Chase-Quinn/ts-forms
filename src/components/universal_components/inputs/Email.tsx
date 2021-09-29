import React, { Component } from 'react'

interface EmailProps {
    label: string,
    name: string,
    onChangeFunction: any
}

export default class Email extends Component<EmailProps> {

    render() {

        const {label, name, onChangeFunction} = this.props

        return (
            <div className='form-group col-xl-5 col-md-11'>
                <label htmlFor={name} className='form-label'>{label}</label>
                <input type='email' name={name} id={name} className='form-control' onChange={onChangeFunction} />
            </div>
        )
    }
}
