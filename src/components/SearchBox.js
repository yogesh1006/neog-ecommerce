import React from "react";
import { Form, Button, FormControl } from "react-bootstrap";

const SearchBox = () => {
  return (
    <div>
      <Form inline>
        <FormControl className="mr-sm-2 ml-sm-5" type="text" placeholder="Search products.."></FormControl>
        <Button className="p-2 ml-1">Search</Button>
      </Form>
    </div>
  );
};

export default SearchBox;
