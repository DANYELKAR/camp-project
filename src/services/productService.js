import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get(
      "https://cors-anywhere.herokuapp.com/https://course-api.com/react-store-products"
    );
  }
}
