import React,{useEffect} from "react";
import axios from "axios"
import {Col, Row} from "react-bootstrap"
import ProductCard from "./ProductCard";
import {API} from "../../backend"
import {useData} from "../../context/dataContext"

const Products = () => {
  const {state,dispatch}=useData();

   async function getData() {
    try {
      const response = await axios.post(`${API}/auth/get_all_products`);
      console.log(response.data.data);
      dispatch({ type: "SET_PRODUCTLIST", payload: response.data.data });

    } catch (error) {
      console.error(error);
    }
  }

   useEffect(() => {
     getData();
  
   }, [])


  return (
    <>
    <Row>
       {state.products.map(product=>(
         <Col key={product._id} sm={12} md={4} lg={4} xl={3}>
          <ProductCard product={product}/>
         </Col>
       ))}


    </Row>
    </>
  );
};

export default Products;
