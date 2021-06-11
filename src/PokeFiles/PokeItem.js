import React, { Component } from 'react'


export default class List extends Component {
    render() {
        return (
            <div>
                <h2>{this.props.data.pokemon}</h2>
                <img src={this.props.data.url_image} alt={this.props.data.pokemon} />
            </div>
        )
    }
}
