import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Deal from './components/Deal';
import DealList from './container/DealList';
import DealForm from './components/DealForm';
import LifeStyle from './components/LifeStyle';


const App = () => (
  <div>
    <Switch>
      <Route exact path="/">
        <DealList />
      </Route>
      <Route path="/lifestyle" exact component={LifeStyle} />
      <Route path="/deals/:id" exact component={Deal} />
      <Route path="/deals/:id/form" exact component={DealForm} />
    </Switch>
  </div>
);

export default App;
