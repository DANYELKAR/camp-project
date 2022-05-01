import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";
import { Route, Routes } from "react-router-dom";
import { ProductDetail } from "../pages/ProductDetail";
import { CartDetail } from "../pages/CartDetail";
import ProductAdd from "../pages/ProductAdd";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <Routes>
              <Route exact path="/" element={<ProductList />} />
              <Route exact path="/products" element={<ProductList />} />
              <Route path="/products/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<CartDetail />} />
              <Route path="/product/add" element={<ProductAdd />} />
            </Routes>
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
}
