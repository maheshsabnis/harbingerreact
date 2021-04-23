import axios from 'axios';

export class HttpService {
    getCategories(){
        let categoriesPromise = axios.get("http://localhost:6001/api/categories");
        return categoriesPromise;
    }

    getProducts(){
        let productsPromise = axios.get("http://localhost:6002/api/products");
        return productsPromise;
    }

}