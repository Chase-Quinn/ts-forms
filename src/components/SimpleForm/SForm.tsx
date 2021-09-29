import React, { Component } from 'react'
import Functions from './Functions'
import FullWidthCentered from '../universal_components/form-holders/FullWidthCentered'
import PageOne from './pages/Page1'
import PageTwo from './pages/Page2'
import PageThree from './pages/Page3'
import JSONpage from './pages/JSON'

export default class SForm extends Component {
    state = {
        page: 1,
        firstName: null,
        lastName: null,
        username: null,
        email: null,
        password: null,
        verifyPassword: null,
        gender: 'undisclosed',
        age: null,
        selfDescription: null
    }

    // Below are all methods for changing state within the application, these will be nested throughout the application to
    // change the current state
    onFirstNameChange = (e: any) =>{
        this.setState({firstName: e.target.value})
    }
    onLastNameChange = (e: any) => {
        this.setState({lastName: e.target.value})
    }
    onUsernameChange = (e: any) => {
        this.setState({username: e.target.value})
    }
    onEmailChange = (e: any) => {
        this.setState({email: e.target.value})
    }
    onPasswordChange = (e: any) => {
        this.setState({password: e.target.value})
    }
    onPasswordVerificationChange = (e: any) => {
        this.setState({verifyPassword: e.target.value})
    }
    onAgeChange = (e: any) => {
        this.setState({age: e.target.value})
    }
    onSelfDescriptionChange = (e: any) => {
        this.setState({selfDescription: e.target.value})
    }
    setGender = (e: any) => {
        this.setState({gender: e.target.value})
    }

    // Declaring a new object for function handling, located in Functions.tsx
    Funct = new Functions

    setPage(e:any, page:number, direction:string){
        e.preventDefault()

        let newPage = 0

        if(direction==='forward'){
            newPage = page + 1
        }

        else if(direction === 'back'){
            newPage = page - 1
        }

        else if(direction === null){
            newPage = page
        }

        this.setState({page: newPage})
    }

    setJSONpage = (e: any) => {
        e.preventDefault()
        this.setState({page: 4})
    }

    pageClick(e:any, page:number){
        this.setState({page: page})
    }

    // Form Pages
    pages(page: any){
        // Error handling for if enter is pressed on the form on page one and it goes below one, it will put it back to the first page
        if(this.state.page < 1){
            this.setState({
                page: 1
            })
        }
        if(this.state.page === 1){
            return (
                <div className='row'>
                    <PageOne 
                        onFirstNameChange={this.onFirstNameChange} 
                        onLastNameChange={this.onLastNameChange} 
                        onUsernameChange={this.onUsernameChange} 
                        onEmailChange={this.onEmailChange} 
                        onPasswordChange={this.onPasswordChange} 
                        onPasswordVerificationChange={this.onPasswordVerificationChange} 
                    />
                </div>
            )
        }
        else if(this.state.page === 2){
            return (
                <div className='row'>
                    <PageTwo onSelfDescriptionChange={this.onSelfDescriptionChange} onAgeChange={this.onAgeChange} setGender={this.setGender} />
                </div>
            )
        }
        else if(this.state.page === 3){
            return (
                <div className='row'>
                    <PageThree setJSONpage={this.setJSONpage} />
                </div>
            )
        }
        else if(this.state.page === 4){
            return(
                <div className='row'>
                    <JSONpage mainState = {this.state} />
                </div>
            )
        }
    }

    // This method removes pagination once the submit button is clicked
    pagination(page: number){
        if (page != 4){
            return (
                <>
                    {/* Form pagination */}
                    <nav className="align-center mt-3" aria-label="...">
                        <ul className="pagination justify-content-center">
                            {/* Conditional variable for the classname if it is at the beginning */}
                            <li className={`page-item ${this.Funct.conditionalBack(this.state.page)}`}>
                                <button className="page-link" onClick={e => this.setPage(e, this.state.page, 'back')}>Previous</button>
                            </li>
                            {/* Conditional rendering if the page is at 1, so it doesn't display 0 */}
                            {this.conditionalFirst(this.state.page)}
                            <li className="page-item active">
                                <button className="page-link">{this.state.page}</button>
                            </li>
                            {/* Conditional rendering if the page is at 3, so it doesn't display an unused page */}
                            {this.conditionalLast(this.state.page)}
                            {/* Conditional variable for the classname if it is at the end */}
                            <li className={`page-item ${this.Funct.conditionalForward(this.state.page)}`}>
                                <button className="page-link" onClick={e => this.setPage(e, this.state.page, 'forward')}>Next</button>
                            </li>
                        </ul>
                    </nav>
                </>
            )
        }
    }

    conditionalFirst(page: number){
        if(page != 1){
            return (
                <li className="page-item"><a className="page-link" onClick={e => this.pageClick(e, this.state.page-1)}>{page - 1}</a></li>
            )
        }
        else if(page === 1){
            return null
        }
    }

    conditionalLast(page: number){
        if(page < 3){
            return <li className="page-item"><a className="page-link" onClick={e => this.pageClick(e, this.state.page + 1)}>{page + 1}</a></li>
        }

        else if(page === 3){
            return null
        }
    }

    // If the enter key is pressed, it will progress until page 4
    enterPress = (e:any) => {
        if(e.key === 'Enter'){
            if(this.state.page <5){
                let newPage = this.state.page + 1
                this.setState({page: newPage})
            }
        }
    }

    // Render Method
    render() {
        return (
            <div onKeyPress={this.enterPress} className="card col-xl-7 col-md-8 col-sm-10 col-xs-11" style={{paddingTop: 10, backgroundColor: 'rgba(150, 150, 150, .8)', minHeight: '20rem'}}>
                <FullWidthCentered>
                    {this.pages(this.state.page)}

                    {this.pagination(this.state.page)}
                    
                </FullWidthCentered>
            </div>

            
        )
    }
}
