import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Home, SecondPage } from '../pages';

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/second" component={SecondPage} />
        <Route path="*">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};