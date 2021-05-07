import React, { Component } from 'react'
import styled from 'styled-components'

export default class NavBar extends Component {
    render() {
        return (
            <nav className="navbar navbar-light bg-light justify-content-between fixed-top" >
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="javascript:history.back()">Pokdex</a>
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Pokemon Name" aria-label="Search"/>
                    <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav>
        )
    }
}
