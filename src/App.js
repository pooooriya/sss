import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from './components/navbar'
import Home from './components/home'
import ShopingBasket from './components/shopingbasket'
import Favorites from './components/favorites'
import './App.css';
const App = () => {
  return (
    <>
      <NavBar />
      <div className="main">
        <Switch>
          <Route path={`/home`} component={Home}></Route>
          <Route path={`/favorites`} component={Favorites}></Route>
          <Route path={`/shopingbasket`} component={ShopingBasket}></Route>
          <Redirect from={`/`} exact to={`/home`} />
        </Switch>
      </div>
    </>
  );
}

export default App;

