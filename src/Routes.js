import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Details from './features/empires/components/Details';
import Home from './features/empires/components/Home';

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
