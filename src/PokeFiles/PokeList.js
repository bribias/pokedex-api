import React, { Component } from 'react'
import PokeItem from './PokeItem';

export default class PokeList extends Component {
    render() {
        return (
            <div className="poke-list">
                {this.props.pokemon.map((pokemon, i) => <PokeItem key={i} pokemon={pokemon} />)}
            </div>
        )
    }
}
