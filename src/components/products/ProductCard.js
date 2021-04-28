import React from "react";
import { Card, Button } from "react-bootstrap";
import { useData } from "../../context/dataContext";



const ProductCard = ({ product }) => {
  console.log(product);

  const {state,dispatch}=useData();

  let addToCart = (product) => {
    let existInCart = false;
    if (state.cart.length > 0) {
      state.cart.map((item) => {
        if (item.id === product.id) {
          existInCart = true;
        }
        return item
      });
    }
    if (!existInCart) {
      dispatch({ type: "ADD_TO_BAG", payload: product });
    }
  };



  return (
    <div>
      <Card style={{ minWidth: "15rem",margin:"0.5rem" }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title><strong>{product.name}</strong></Card.Title>
          <Card.Text as="h5">
            Rs.{product.price}
          </Card.Text>
         <Button variant="primary" block onClick={()=>{addToCart(product)}}> {product.available_stock > 0 ? "Add To Cart" : "Out Of Stock"}</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
