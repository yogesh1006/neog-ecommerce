// import { Container } from "react-bootstrap";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Signin from "./components/signin/Signin";
import Signup from "./components/signup/Signup";
import PrivateRoute from "./PrivateRoute"
import Cart from "./components/cart/Cart";
import Products from "./components/products/Products";
// import SideBar from "./components/sidebar/SideBar";



function App() {
  return (
    <div className="App">
      <Header />
      <main className="m-4">
        {/* <SideBar /> */}
        <Switch>
          <Route path="/" component={Products} exact/>
          <Route path="/login" component={Signin} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/cart" component={Cart}/>

        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
