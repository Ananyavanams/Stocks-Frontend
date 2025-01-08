import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import logo from '../components/assets/logo.jpg';

class Hearder extends Component {
    constructor(props) {
        super(props)


        this.navigate = this.navigate.bind(this);
        this.stockwatchlist = this.stockwatchlist.bind(this);


    }
    navigate() {
        this.props.history.push(`/dashboard`);

    }
    stockwatchlist(){
        this.props.history.push(`/stocks`);

    }

    render() {
        return (
            <div>
                <header>

                    <nav class="navbar navbar-expand-md navbar-dark bg-black">
                        <form class="container-fluid justify-content-start">
                            <div> <a className="p-4 navbar-brand" href="#">
                                <img src={logo} alt="tickertape" style={{ width: '40px', height: '40px' }} />
                                tickertape
                            </a></div>
                            <button className="no-outline-button" onClick={this.navigate} type="button">Portfolio</button>
                            <button className="no-outline-button"  onClick={this.stockwatchlist} type="button" style={{ marginLeft: '10px' }}>Watchlist</button>
                        </form>
                    </nav>


                </header>


            </div>
        );
    }
}

export default withRouter(Hearder);
