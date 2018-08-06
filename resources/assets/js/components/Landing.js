import React, { Component } from 'react';
import ButtonAppBar from './NavigationBar';
import ReactDOM from 'react-dom';

export default class Landing extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <ButtonAppBar/>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Landing />, document.getElementById('example'));
}
