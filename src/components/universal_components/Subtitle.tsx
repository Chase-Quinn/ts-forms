import React, { Component } from 'react'

interface SubtitleProps {
    subtitle: string
}

export default class Subtitle extends Component<SubtitleProps> {
    render() {

        const {subtitle} = this.props
        
        return (
            <div className="col-12 text-center text-white">
                <h4>{subtitle}</h4>
            </div>
        )
    }
}
