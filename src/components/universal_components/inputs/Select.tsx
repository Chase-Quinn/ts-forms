import React, { Component } from 'react'

interface SelectProps {
    label: string,
    name: string,
    opts: Array<{value: string, name: string}>,
    setGender: any
}

export default class SelectField extends Component<SelectProps> {
    
    render() {
        const {label, name, opts, setGender} = this.props

        const optionVar = opts.map((opt) => {
                return <option value={opt.value}>{opt.name}</option>
            })

        return (
            <div className='form-group col-xl-5 col-md-11'>
                <label htmlFor={name} className='form-label'>{label}</label>
                <select name={name} id={name} className='form-control' onChange={e => setGender(e)}>
                    {optionVar}
                </select>
            </div>
        )
    }
}
