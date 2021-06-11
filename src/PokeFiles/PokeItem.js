import React, { Component } from 'react'


export default class List extends Component {
    render() {
        return (
            <div className='item-div'>
                <h2>{this.props.pokemon.pokemon}</h2>
                <img src={this.props.pokemon.url_image} alt={this.props.pokemon.pokemon} />
            </div>
        )
    }
}
