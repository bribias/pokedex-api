import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.event}>
                    <option value=''>A L L </option>
                    <option value='asc'>A S C E N D I N G</option>
                    <option value='desc'>D E S C E N D I N G</option>
                </select>
            </div>
        )
    }
}
