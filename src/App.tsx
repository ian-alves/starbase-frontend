import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider } from './contexts/AuthContext';
import { Home } from './pages/Home';
import { ListPlanets } from './pages/ListPlanets';
import { NewPlanet } from './pages/NewPlanet';
import { ListAirships } from './pages/ListAirships';
import { NewAirship } from './pages/NewAirship';

function App() {
    return (
        <BrowserRouter>
            <AuthContextProvider>
                <Switch>
                    <Route path="/" exact component={Home}></Route>
                    <Route path="/planets/new" component={NewPlanet}></Route>
                    <Route path="/planets/list" component={ListPlanets}></Route>
                    <Route path="/airships/new" component={NewAirship}></Route>
                    <Route path="/airships/list" component={ListAirships}></Route>
                </Switch>
            </AuthContextProvider>
        </BrowserRouter>
    );
}

export default App;
