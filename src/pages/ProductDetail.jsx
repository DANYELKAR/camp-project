import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button, Image } from "semantic-ui-react";
import ProductService from "../services/productService";

export const ProductDetail = () => {
  let { id } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    let productService = new ProductService();
    productService.getProducts().then((result) => setProducts(result.data));
  }, []);

  return (
    <div>
      {products
        .filter((product) => product.id === id)
        .map((product, index) => (
          <Card.Group key={index}>
            <Card fluid>
              <Card.Content>
                <Image floated="right" size="medium" src={product.image} />
                <Card.Header floated="center">
                  Ürün Adı: {product.name}
                </Card.Header>
                <Card.Meta>Ürün Kategorisi: {product.category}</Card.Meta>
                <Card.Meta>Ürün Markası: {product.company}</Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </Card.Group>
        ))}
    </div>
  );
};
