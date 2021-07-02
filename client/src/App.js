
import './App.css';
import Login from  './components/Login';
import {BrowserRouter,Route} from 'react-router-dom';
import Customer from './components/Customer';
import Experts from './components/Experts';
import Admin from './components/Admin';

 
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
      <Route path="/register/customer" component={Customer}></Route>
      <Route path="/register/customer" component={Experts}></Route>
      <Route path="/register/customer" component={Admin}></Route>
      
    </BrowserRouter>
  );
}

export default App;
