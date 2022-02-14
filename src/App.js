import './App.css';
import HomePage from './pages/homepage/homepage';
import HatPage from './components/hats';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatPage} />
      </Switch>
    </>
  );
}

export default App;
