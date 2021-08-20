import './App.css'
// import TaskForm from './TaskForm'
import Login from './components/Login'
import Register from './components/Register'
import Header from './components/Header'
import Home from './components/HomePage'
import ContactUs from './components/ContactUs'
import Info from './components/Info'
// import Test from './Test'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className='App'>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/login'
          render={() =>
            window.localStorage.getItem('loginInfo') ? <Register /> : <Login />
          }
        />
        <Route exact path='/register' component={Register} />
        <Route exact path='/contact-us' component={ContactUs} />
        <Route exact path='/info' component={Info} />
      </Switch>
      {/* <Test /> */}
    </div>
  )
}

export default App
