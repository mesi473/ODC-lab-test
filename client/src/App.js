
import './App.css';
import Login from  './components/Login';
import {BrowserRouter,Route} from 'react-router-dom';
import Customer from './components/Customer';
import Experts from './components/Experts';
import Admin from './components/Admin';
import CustomerDashboard from './components/CustomerDashboard';

 
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
      <Route path="/register/customer" component={Customer}></Route>
      <Route path="/register/expert" component={Experts}></Route>
      <Route path="/register/admin" component={Admin}></Route>
      <Route path="/customer/dashboard" component={CustomerDashboard}></Route>
    </BrowserRouter>
  );
}

export default App;
