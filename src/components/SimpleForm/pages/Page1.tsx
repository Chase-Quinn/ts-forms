import React, { Component } from 'react'
import Text from '../../universal_components/inputs/Text'
import Email from '../../universal_components/inputs/Email'
import Password from '../../universal_components/inputs/Password'

interface PageOneProps{
    onFirstNameChange: any,
    onLastNameChange: any,
    onUsernameChange: any,
    onEmailChange: any,
    onPasswordChange: any,
    onPasswordVerificationChange: any
}

export default class PageOne extends Component<PageOneProps> {
    render() {
        // Assigning callback functions to props
        const {onFirstNameChange, onLastNameChange, onUsernameChange, onEmailChange, onPasswordChange, onPasswordVerificationChange} = this.props

        return (
            <div className="row justify-content-center">
                <Text label='First Name' name='fname' onChangeFunction={onFirstNameChange}/>
                <Text label='Last Name' name='lname' onChangeFunction={onLastNameChange} />
                <Text label='Username' name='username' onChangeFunction={onUsernameChange} />
                <Email label='Email' name='email' onChangeFunction={onEmailChange} />
                <Password label='Password' name='password' onChangeFunction={onPasswordChange} />
                <Password label='Verify Password' name='verifyPassword' onChangeFunction={onPasswordVerificationChange} />
            </div>
        )
    }
}
