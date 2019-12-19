import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { getGeojson } from './lib/http'
import PubSub from 'pubsub-js'
import { messageTypes } from './lib/messageTypes';

getGeojson().then(geojson => {
  PubSub.publish(messageTypes.dataLoaded, geojson)
});

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
