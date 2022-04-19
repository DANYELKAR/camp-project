import React from "react";
import ProductList from "../pages/ProductList";
import Categories from "./Categories";
import { Grid, GridColumn, GridRow } from "semantic-ui-react";

export const Dashboard = () => {
  return (
    <div>
      <Grid>
        <GridRow>
          <GridColumn width={4}>
            <Categories />
          </GridColumn>
          <GridColumn width={12}>
            <ProductList />
          </GridColumn>
        </GridRow>
      </Grid>
    </div>
  );
};
