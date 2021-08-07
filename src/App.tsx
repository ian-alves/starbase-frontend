import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/Home';
import { ListPlanets } from './pages/ListPlanets';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home}></Route>
        <Route path="/planets" component={ListPlanets}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
