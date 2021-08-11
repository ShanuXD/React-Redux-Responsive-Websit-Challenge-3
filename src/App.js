import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Earphone from "./pages/Earphone";
import Headphone from "./pages/Headphone";
import Home from "./pages/Home";
import Speakers from "./pages/Speakers";
import Error from "./pages/Error";
import SingleProduct from "./pages/SingleProduct";
import Checkout from "./pages/Checkout";
import { Provider } from "react-redux";
import store from "./redux/store";
import ScrollToTop from "./ScrollToTop";
import "./styles/style.scss";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Provider store={store}>
          <Navbar />
          <ScrollToTop>
            <Switch>
              <Route exact path="/" component={Home}></Route>{" "}
              {/* or--> <Route exact path="/"><Home /></Route>*/}
              <Route exact path="/headphones" component={Headphone}></Route>
              <Route path="/headphones/:id" component={SingleProduct}></Route>
              <Route exact path="/speakers" component={Speakers}></Route>
              <Route path="/speakers/:id" component={SingleProduct}></Route>
              <Route exact path="/earphones" component={Earphone}></Route>
              <Route path="/earphones/:id" component={SingleProduct}></Route>
              <Route path="/checkout" component={Checkout}></Route>
              <Route path="*" component={Error}></Route>
            </Switch>
          </ScrollToTop>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
