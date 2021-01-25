import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import SIgnUp from './pages/signUp/SIgnUp';
import Login from './pages/login/Login';

function App() {
    return ( <
        div className = "App" >
 <BrowserRouter>
 <div>
 <Route exact path='/signup' component={SIgnUp}></Route>
 <Route exact path='/' component={Login}></Route>
 </div>
 </BrowserRouter>
        < / div >
    );
}

export default App