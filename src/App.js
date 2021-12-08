 
 import {BrowserRouter as Router,Switch,Route } from 'react-router-dom';

import Home from './pages/Home';
import SingleProduct from './pages/SingleProduct';
import Products from './pages/Products';
import Navigation from './components/Navigation';
import Cart from './pages/Cart';
 const App = () => {
     return (
         <>
            <Router>
               

                <Navigation />
                
                <Switch>
                    <Route path="/" component={Home} exact></Route>
                    {/* <Route path="/about" component={About}></Route> */}
                    <Route path="/products" exact component={Products}></Route>
                    <Route path="/products/:name" component={SingleProduct} ></Route>
                    <Route path="/cart" component={Cart}></Route>
                </Switch>
            </Router>
        </>   
     )
 } 


 export default App;