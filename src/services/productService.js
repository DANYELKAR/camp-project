import axios from "axios";

export default class ProductService {
  getProducts() {
    return axios.get(
      "https://raw.githubusercontent.com/DANYELKAR/camp-project/main/api/productList.json"
    );
  }
}
