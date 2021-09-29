import React, { Component } from 'react'
import Subtitle from '../universal_components/Subtitle';
import Title from '../universal_components/Title'
import SForm from './SForm';

interface SimpleFormProps {
    title: string,
    subtitle: string
}

export default class SimpleForm extends Component<SimpleFormProps> {
    render() {

        const {title, subtitle} = this.props;
        return (
            <div className="col-12">
                <Title title={title} />
                <Subtitle subtitle={subtitle} />
                <p className='col-12 text-center text-white'>To see the code, visit my <a href="https://www.github.com/Chase-Quinn/ts-forms">Github Repository</a>.</p>

                <hr />

                <div className="row justify-content-center">
                    <SForm />
                </div>
                

            </div>
        )
    }
}
