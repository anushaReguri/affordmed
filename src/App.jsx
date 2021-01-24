import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import SIgnUp from './pages/signUp/SIgnUp';
import Login from './pages/login/Login';

function App() {
    return ( <
        div className = "App" >
<SIgnUp/>
 <BrowserRouter>
 <Switch>
 <Route path='signup' component={SIgnUp}></Route>
 </Switch>
 </BrowserRouter>
        < / div >
    );
}

export default App;