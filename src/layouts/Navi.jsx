import React from "react";
import { Container, Menu } from "semantic-ui-react";
import CartSummary from "./CartSummary";
import { SignedIn } from "./SignedIn";
import { SignOut } from "./SignOut";

export default function Navi() {
  return (
    <div>
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item name="home" />
          <Menu.Item name="messages" />
          <Menu.Menu position="right">
            <CartSummary />
            <SignOut />
            <SignedIn />
          </Menu.Menu>
        </Container>
      </Menu>
    </div>
  );
}
