import React from 'react';
import {render} from 'react-dom';

import "../css/main.scss";
import "bootstrap-webpack";

import AppChat from './containers/app.jsx'

render(<AppChat/>, document.querySelector('#content'));
