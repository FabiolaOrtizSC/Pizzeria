import './App.css';
import '../src/style/Style.css';
import Main from './views/Main';
import Account from './views/Account';
import Order from './views/Order';
import Ticket from './views/Ticket';
import Prices from './views/Prices';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisForm from './components/RegisForm';
import ReOrder from './components/ReOrder';
import SurpriseMe from './components/SurpriseMe';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
            <Route exact path="/" render={ () => <RegisForm />}/>
            <Route exact path="/login" render={ () => <LoginForm />}/>
            <Route exact path="/home" render={ () => <Main />}/>
            <Route exact path="/prices" render={ () => <Prices />}/>
            <Route exact path="/account" render={ () => <Account />}/>
            <Route exact path="/order" render={ () => <Order />}/>
            <Route exact path="/reorder" render={ () => <ReOrder />}/>
            <Route exact path="/surpriseme" render={ () => <SurpriseMe />}/>
            <Route exact path="/ticket/:id" render={ (routeProps) => <Ticket {...routeProps}/>}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
