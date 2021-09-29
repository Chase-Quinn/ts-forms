import React, { Component } from 'react'

interface ContainerProps {
    children?: React.ReactNode
}

export default class FullWidthCentered extends Component<ContainerProps> {
    render() {

        const {children} = this.props

        return (
            <div className="row col-12 justify-content-center">
                {children}
            </div>
        )
    }
}
