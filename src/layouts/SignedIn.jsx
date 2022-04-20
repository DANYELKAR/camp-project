import React from "react";
import { Dropdown, Menu, Image } from "semantic-ui-react";

export const SignedIn = () => {
  return (
    <div>
      <Menu.Item>
        <Image
          avatar
          spaced="right"
          src="https://scontent.fesb10-1.fna.fbcdn.net/v/t1.18169-9/14595576_213331369099427_7451507782906460258_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=174925&_nc_ohc=3PQC6kmkANcAX9mznUc&_nc_ht=scontent.fesb10-1.fna&oh=00_AT_5Usc-42CFf4e8LlUf4JBEEq5MBOBjF0JsffGhpVNpwQ&oe=62852791"
        />
        <Dropdown pointing="top left" text="Danyel">
          <Dropdown.Menu>
            <Dropdown.Item text="Bilgilerim" icon="info"></Dropdown.Item>
            <Dropdown.Item text="Çıkış Yap" icon="sign-out"></Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Menu.Item>
    </div>
  );
};
