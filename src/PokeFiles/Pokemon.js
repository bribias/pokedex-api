import React, { Component } from 'react';
import request from 'superagent';
import Spinner from '../Spinner'

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, 3000))

export default class Pokemon extends Component {

    state = {
        pokemon: [],
        loading: false,
        query: '',
        sortOrder: 'asc',
    }

    // gets called when the component mounts for the first time
    componentDidMount = async () => {
        await this.fetchData();
    }

    handleClick = async () => {
        await this.fetchData();
    }

    handleChange = (e) => {
        this.setState({ query: e.target.value });
    }

    fetchData = async () => {
        this.setState({ loading: true });

        const URL = this.state.query
            ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`
            : `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${this.state.sortOrder}`;

        const data = await request.get(URL)
        await sleep(3200)
        // request finished, loading ends.

        this.setState({ loading: false });
        this.setState({ pokemon: data.body });
    }

    render() {
        return (
            <div>
                <input onChange={this.handleChange} />

                <button onClick={this.handleClick}>F E T C H</button>

                {this.state.loading ? <Spinner />
                    : this.state.pokemon.map(pokemon =>
                        <p>
                            <img width="75" src={pokemon.image} alt={pokemon.results} />
                            {pokemon.results}
                        </p>
                    )}
            </div>
        )
    }
}