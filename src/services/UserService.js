import axios from 'axios'

const STOCK_REST_API_URL='http://51.20.83.139:9092/api/stocks';

class UserService{
    getstock(){
        return axios.get(STOCK_REST_API_URL);
    }
    createStock(stock){
        return axios.post(STOCK_REST_API_URL,stock);
    }
    getstocks(stockid){
        return axios.get(STOCK_REST_API_URL + '/' + stockid);
    }
    updateStock(stock,stockid){
        return axios.put(STOCK_REST_API_URL + '/' + stockid,stock)

    }
    removestock(stockid){
        return axios.delete(STOCK_REST_API_URL + '/' + stockid);
    }

}


export default new UserService();