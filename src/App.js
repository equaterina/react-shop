import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

//Pages
import Category from "./pages/Caterogy/Category";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Page404 from "./pages/Page404/Page404";
import Favorites from "./pages/Favorites/Favorites";
import TermsAndConditions from "./pages/TermsAndConditions/TermsAndConditions";

//Components
import Product from "./components/Product/Product";

// Cart
import Cart from "./pages/Cart/Cart";
import "./utils/utility-classes.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="app">
        <Switch>
          <Route exact path="/" render={(props) => <Home {...props} />} />
          <Route path="/login" component={Login} />
          <Route path="/about" component={About} />
          <Route path="/t&c" component={TermsAndConditions} />
          <Route path="/category/:categoryName" component={Category} />
          <Route path="/product/:productId" component={Product} />
          <Route path="/cart" component={Cart} />
          <Route path="/favorites" component={Favorites} />
          <Route path="*" component={Page404} />
        </Switch>
      </div>
    );
  }
}

export default App;
