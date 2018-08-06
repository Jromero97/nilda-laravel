import React, { Component } from 'react';
import DashboardButtonAppBar from './DashboardNavBar';

class MainDashboard extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <DashboardButtonAppBar/>
                </div>
            </div>
        )
    }
}

export default MainDashboard;