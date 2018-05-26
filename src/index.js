import React from 'react';
import createSagaMiddleware from 'redux-saga';
import { render } from 'react-dom';
import App from './components/App';

//Create saga middleware
const sagaMiddleware = createSagaMiddleware();

render (
    <App />,
    document.getElementById('app')
)

module.hot.accept();
