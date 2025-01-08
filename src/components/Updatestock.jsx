import React, { Component } from 'react';
import UserService from '../services/UserService';

class Updatestock extends Component {

    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            name:'',
            quantity:'',
            price:'',

        }
        this.changenameHandler=this.changenameHandler.bind(this);
        this.changequantityHandler=this.changequantityHandler.bind(this);
        this.updateStock=this.updateStock.bind(this);

        
    }
    componentDidMount(){
        UserService.getstocks(this.state.id).then((res) =>{
            let stockid = res.data;
            this.setState({name: stockid.name ,
                quantity: stockid.quantity,
                price: stockid.price,

            });
        });
    }
    updateStock = (e) =>{
        e.preventDefault();
        let stock = {name :this.state.name, quantity :this.state.quantity, price :this.state.price};
        console.log('stock => ' + JSON.stringify(stock));
        UserService.updateStock(stock,this.state.id).then(res => {
            this.props.history.push('/stocks');
        });


    }

    changenameHandler = (event) =>{
        this.setState({name: event.target.value});
    }
    changequantityHandler = (event) =>{
        this.setState({quantity: event.target.value});
    }
    changepriceHandler = (event) =>{
        this.setState({price: event.target.value});
    }
    cancel(){
        this.props.history.push('/stocks');

    }


    render() {
        return (
            <div>
                <br />
                <div className="container">
                    <div className="row">
                      
                        <div class="card col-md-6 offset-ms-3 offset-md-3">
                        
                            <h3 className="text-center">UPDATE STOCK</h3>
                              <div className="card-body">
                                <br />
                                <form action="">
                                    <div className="form-group">
                                        <label htmlFor="">Stock Name</label>
                                        <input type="text" placeholder='stock name' name='name' className='form-control' 
                                        value={this.state.name} onChange={this.changenameHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Quantity</label>
                                        <input type="text" placeholder='quantity' name='quantity' className='form-control' 
                                        value={this.state.quantity} onChange={this.changequantityHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="">Stock price</label>
                                        <input type="text" placeholder='stock price' name='price' className='form-control' 
                                        value={this.state.price} onChange={this.changepriceHandler}/>
                                    </div>

                                    <br />
                                    <button className="btn btn-success" onClick={this.updateStock}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft:"10px"}}>cancel</button>

                                </form>
                              </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}


export default Updatestock;
