import React, { Component } from 'react'
import SelectField from '../../universal_components/inputs/Select'
import TextNumber from '../../universal_components/inputs/TextNumber'
import Text from '../../universal_components/inputs/Text'
import TextArea from '../../universal_components/inputs/TextArea'

interface PageTwoProps{
    setGender: any,
    onAgeChange: any,
    onSelfDescriptionChange: any
}

export default class PageTwo extends Component<PageTwoProps> {

    options1 = [
        {value: 'undisclosed', name: 'Rather not say'},
        {value: 'male', name: 'Male'},
        {value: 'female', name: 'Female'}
    ]

    render() {
        const {setGender, onAgeChange, onSelfDescriptionChange} = this.props
        return (
            <div className='row justify-content-center'>
                <SelectField label='Gender' name='gender' opts={this.options1} setGender={setGender} />
                <TextNumber label='Age' name='age' onAgeChange={onAgeChange} />
                <TextArea label='Tell us a little about you' name='personalDescription' onSelfDescriptionChange={onSelfDescriptionChange} />
            </div>
        )
    }
}
