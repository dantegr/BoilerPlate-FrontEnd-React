import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
  <div>this is dahborad component</div>
);

const AddExpensePage = () => (
  <div>this is add expense component</div>
);

const EditExpensePage = () => (
  <div>this is edit expense component</div>
);

const HelpPage = () => (
  <div>this is help component</div>
);

const NotFoundPage = () => (
  <div>
    404! - <Link to="/">Go Home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expenser</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Home</NavLink> - 
    <NavLink to="/create" activeClassName="is-active">Create</NavLink> - 
    <NavLink to="/edit" activeClassName="is-active">Edit</NavLink> - 
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
    <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={NotFoundPage} />

      </Switch>
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'));