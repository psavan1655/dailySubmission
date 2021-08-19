import './App.css'
import TaskForm from './TaskForm'
// import Test from './Test'
import DataDisplay from './DataDisplay'
import { Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={TaskForm} />
        <Route exact path="/data" component={DataDisplay} />
      </Switch>
      {/* <Test /> */}
    </div>
  )
}

export default App
