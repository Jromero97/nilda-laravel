import React, { Component } from 'react';
import CustomDenseAppBar from './NavigationBar';
import ReactDOM from 'react-dom';

export default class Example extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <CustomDenseAppBar>
                        Administrator
                    </CustomDenseAppBar>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
