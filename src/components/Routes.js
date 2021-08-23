import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './Details';
import Home from './Home';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/empire/:id" component={Details} />
      </Switch>
    </BrowserRouter>
  );
}
