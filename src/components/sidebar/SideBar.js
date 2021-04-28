import React from "react";
import { InputGroup, Nav, ListGroup } from "react-bootstrap";

const SideBar = () => {
  return (
    <div>
      <Nav className="sidebar">
        <ListGroup>
          <ListGroup.Item>
            <InputGroup>
              <InputGroup.Prepend>
              <InputGroup.Text >HIGH TO LOW</InputGroup.Text>
                <InputGroup.Radio aria-label="Radio button for following text input" name="sort"/>
                <InputGroup.Text >LOW TO HIGH</InputGroup.Text>
              <InputGroup.Radio aria-label="Radio button for following text input" name="sort" />

              </InputGroup.Prepend>
            </InputGroup>
          </ListGroup.Item>
        </ListGroup>
     
      </Nav>
    </div>
  );
};

export default SideBar;
