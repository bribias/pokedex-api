import React, { Component } from 'react';
import request from 'superagent';
import Spinner from '../Spinner';
import PokeList from '../PokeFiles/PokeList';
import Sort from '../Sort';

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
            ? `https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.sortOrder}`
            : `https://pokedex-alchemy.herokuapp.com/api/pokedex?sort=pokemon&direction=${this.state.sortOrder}`;

        const data = await request.get(URL)
        await sleep(1200)
        // request finished, loading ends.

        this.setState({ loading: false });
        this.setState({
            pokemon: data.body.results,
            sortOrder: data.body.sort
        });
    }

    handleSort = async (e) => {
        this.setState({ sortOrder: e.target.value })
    }

    render() {
        return (
            <div className='main-div'>
                <input onChange={this.handleChange} />
                <Sort event={this.handleSort} />
                <button onClick={this.handleClick}>F E T C H</button>


                {this.state.loading
                    ? <Spinner />
                    : <PokeList pokemon={this.state.pokemon} />
                }
            </div>
        )
    }
}