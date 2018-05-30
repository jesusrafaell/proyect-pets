import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Home from '../containers/Home';
import Navbar from '../components/Common/Navbar';
import axios from 'axios';
import './App.css';

export default class App extends Component {

    render () {
        return (
            <div>
                <Home />
            </div>
        )
    };
}
