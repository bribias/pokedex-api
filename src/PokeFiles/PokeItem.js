import React, { Component } from 'react'


export default class List extends Component {
    render() {
        return (
            <div className='item-div'>
                <h2>{this.props.pokemon.pokemon}</h2>
                <img
                    src={this.props.pokemon.url_image}
                    alt={this.props.pokemon.pokemon} />
                <div className="species">
                    s p e c i e s - i d :  {this.props.pokemon.species_id}

                </div>
                <div className="type">
                    t y p e : {this.props.pokemon.type_1}
                </div>
                <div className="attack">
                    a t t a c k : {this.props.pokemon.attack}
                </div>
            </div>
        )
    }
}
