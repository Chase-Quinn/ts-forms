import React, { Component } from 'react'

interface RadioProps {
    name: string,
    question: string,
    answer: string
}

export default class Radio extends Component<RadioProps> {
    render() {

        const {name, question, answer} = this.props

        return (
            <div className='form-group col-xl-5 col-md-11'>
                <label htmlFor={name} className='form-label'>{question}</label>
                <input type='radio' name={name} id={name} value={answer} className='form-control'/>
            </div>
        )
    }
}
