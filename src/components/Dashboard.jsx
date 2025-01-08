import React from 'react';
import Plot from 'react-plotly.js';

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            stockChartXValues: [],
            stockChartYValues: [],
            totalPortfolioValue: 0

        }
    }
    componentDidMount() {
        this.fetchStock();
    }
    fetchStock() {
        const pointerToThis = this;
        console.log(pointerToThis);
        const API_KEY = "cttoo61r01qqhvb13hvgcttoo61r01qqhvb13i00";
        let StockSymbol = ['AMZN', 'AAPL', 'TSLA', 'GOOGL', 'MSFT'];
        let stockChartXValuesFunction = [];
        let stockChartYValuesFunction = [];
        let totalValue = 0;

        StockSymbol.forEach((symbol) => {
            let API_Call = `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${API_KEY}`;

            fetch(API_Call)
                .then(
                    function (response) {
                        return response.json();
                    }
                )
                .then(
                    function (data) {
                        console.log(data);

                        stockChartXValuesFunction.push(symbol);
                        stockChartYValuesFunction.push(data.o);
                        totalValue += data.o;

                        // console.log(stockChartYValuesFunction);

                        if (stockChartXValuesFunction.length === StockSymbol.length) {

                            pointerToThis.setState({
                                stockChartXValues: stockChartXValuesFunction,
                                stockChartYValues: stockChartYValuesFunction,
                                totalPortfolioValue: totalValue
                            });
                        }
                    }
                )

        });

    }


    render() {
        return (
            <div>
                <h1>Stock Market</h1>
                <p>x-values: {this.state.stockChartXValues.join(', ')}</p>
                <p>y-values: {this.state.stockChartYValues.join(', ')}</p>

                <Plot
                    data={[
                        {
                            x: this.state.stockChartXValues,
                            y: this.state.stockChartYValues,
                            type: 'bar',
                            // mode: 'lines+markers',
                            marker: { color: 'red' },
                        },

                    ]}
                    layout={{ width: 720, height: 440, title: 'STOCK PRICES' }}
                />

                <h2>Total Portfolio Value: ${this.state.totalPortfolioValue.toFixed(2)}</h2>


            </div>
        );
    }
}

export default Dashboard;