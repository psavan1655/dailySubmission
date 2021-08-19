import './App.css'
import TaskForm from './TaskForm'
// import Test from './Test'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TaskForm} />
      </Switch>
      {/* <Test /> */}
    </div>
  )
}

export default App
