import React, { Component } from 'react';
import UserService from '../services/UserService';



class Stockwishlist extends Component {

    constructor(props) {
        super(props)
        this.state = {
            stock: []
        }
        //created binding for stocks component
        this.stocklist = this.stocklist.bind(this);
        this.editstock = this.editstock.bind(this);
        this.deletestock = this.deletestock.bind(this);
    }
    //it filterout the array instead of deleting it 
    deletestock(id) {
        UserService.removestock(id).then(res => {
            this.setState({ stock: this.state.stock.filter(stock => stock.id !== id) });
        })
    }

    editstock(id) {
        this.props.history.push(`/updatestock/${id}`);

    }
    //navigated or routed through this
    stocklist() {
        this.props.history.push('/stocklist');
    }

    //lifecycle method used to call restapi methods
    componentDidMount() {
        UserService.getstock().then((response) => {
            this.setState({ stock: response.data })
        });

    }


    render() {
        return (
            <div>

                <h2 className="p-2 text-center">STOCKS</h2>
               
                <div className="">
                    <button className="btn btn-dark " onClick={this.stocklist}>Add Stocks</button>
                </div>
                <br />

                <div className="row" >
                    <table class="table table-striped table-bordered">

                        <tr>
                            {/* <th>Stock ID</th> */}
                            <th>Stock Name</th>
                            <th>Stock Quantity</th>
                            <th>Stock Price</th>
                            <th>Edit</th>

                        </tr>

                        <tbody>
                            {
                                this.state.stock.map(
                                    stock =>
                                        <tr key={stock.id}>
                                            {/* <td>{stock.id}</td> */}
                                            <td>{stock.name}</td>
                                            <td>{stock.quantity}</td>
                                            <td>{stock.price}</td>
                                            <td>
                                                <button onClick={() => this.editstock(stock.id)} className='btn btn-dark '>Update</button>
                                                <button style={{ marginLeft: "10px" }} onClick={() => this.deletestock(stock.id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }

                        </tbody>

                    </table>


                </div>


            </div>
        );
    }
}

export default Stockwishlist;