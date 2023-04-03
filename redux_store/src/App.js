import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductListing from "./components/ProductListing";
import ProductDetails from "./components/ProductDetails";
import NotFound from "./components/NotFound";

function App() {
  const [contacts, setContacts] = useState([]);
  
  return (
    <Router>
      
      <Switch>
        <Route exact path="/">
          <ProductListing/>
        </Route>
        <Route path="/product/:productId">
          <ProductDetails/>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
