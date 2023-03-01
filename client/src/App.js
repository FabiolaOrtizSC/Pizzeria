import './App.css';
import '../src/style/Style.css';
import Main from './views/Main';
import Account from './views/Account';
import Order from './views/Order';
import Ticket from './views/Ticket';
import Prices from './views/Prices';
import Favorites from './views/Favorites';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisForm from './components/RegisForm';
import ReOrder from './components/ReOrder';
import SurpriseMe from './components/SurpriseMe';

function App() {

  const priceSize = [
    {size: 'Large', price: 9.95},
    {size: 'Medium', price: 7.95},
    {size: 'Small', price: 5.95}
  ]

  const priceCrust = [
    {crust: 'Thin Crust', price: 2.25},
    {crust: 'Stuffed Crust', price: 2.25},
    {crust: 'Cheese Crust', price: 2.55},
    {crust: 'Thick Crust', price: 3.25}
  ]

  const priceToppings1 = [
    {topping: 'Pepperoni', price: 5.25, check: false},
    {topping: 'Tomato', price: 5.25},
    {topping: 'Onion', price: 5.25},
    {topping: 'Arugula', price: 5.25},
    {topping: 'Pineapple', price: 5.25},
    {topping: 'Mushroom', price: 6.25},
    {topping: 'Pepper', price: 6.25},
    {topping: 'Bacon', price: 6.25}
  ]

  const priceToppings2 = [
    {topping: 'Garlic', price: 6.25},
    {topping: 'Red Onion', price: 6.25},
    {topping: 'Chicken', price: 7.55},
    {topping: 'Olives', price: 7.55},
    {topping: 'Basil', price: 7.55},
    {topping: 'Broccoli', price: 7.55},
    {topping: 'Oregano', price: 7.55}
  ]

  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={ () => <RegisForm />}/>
            <Route exact path="/login" render={ () => <LoginForm />}/>
            <Route exact path="/home" render={ () => {if (localStorage.getItem("idUsuario")) {return <Main />} else {return<Redirect to="/login" />}}}/>
            <Route exact path="/order" render={ () => {if (localStorage.getItem("idUsuario")) {return <Order />} else {return<Redirect to="/login" />}}}/>
            <Route exact path="/account" render={ () => {if (localStorage.getItem("idUsuario")) {return <Account />} else {return<Redirect to="/login" />}}}/>
            <Route exact path="/favorites" render={ () => {if (localStorage.getItem("idUsuario")) {return <Favorites />} else {return<Redirect to="/login" />}}}/>
            <Route exact path="/reorder/:id" render={ () => {if (localStorage.getItem("idUsuario")) {return <ReOrder />} else {return<Redirect to="/login" />}}}/>
            <Route exact path="/surpriseme" render={ () => {if (localStorage.getItem("idUsuario")) {return <SurpriseMe />} else {return<Redirect to="/login" />}}}/>
            <Route exact path="/prices" render={ () => {if (localStorage.getItem("idUsuario")) {return <Prices priceSize={priceSize} priceCrust={priceCrust} priceToppings1={priceToppings1} priceToppings2={priceToppings2}/>} else {return<Redirect to="/login" />}}}/>
            <Route exact path="/ticket/:id" render={ (routeProps) => {if (localStorage.getItem("idUsuario")) {return <Ticket {...routeProps} priceSize={priceSize} priceCrust={priceCrust} priceToppings1={priceToppings1} priceToppings2={priceToppings2}/>} else {return<Redirect to="/login" />}}}/>
            <Route exact path="*" render={ () => <LoginForm/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
