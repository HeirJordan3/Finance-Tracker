import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Login from './pages/login/Login'
import Signup from './pages/signup/Signup'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom'
import Navbar from './components/Navbar'



function App() {
  return (
    <div className="App">

      <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
      </BrowserRouter>
      
      </div>
  );
}

export default App