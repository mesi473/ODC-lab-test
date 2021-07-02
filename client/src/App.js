
import './App.css';
import Login from  './components/Login';
import {BrowserRouter,Route} from 'react-router-dom';

 
function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login}></Route>
    </BrowserRouter>
  );
}

export default App;
