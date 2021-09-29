import React, { Component } from 'react'

interface TitleProps {
    title: string
}

export default class Title extends Component<TitleProps> {
    render() {

        const {title} = this.props
        
        return (
            <div className="col-12 text-center text-white">
                <h1>{title}</h1>
            </div>
        )
    }
}
