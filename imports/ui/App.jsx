import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// import LoggedRoute from 'imports/ui/Components/LoggedRoute';

import Signin from '/imports/ui/pages/login/Signin';
import Board from '/imports/ui/pages/board/Board';
import Events from '/imports/ui/pages/events/Events';
import Groups from '/imports/ui/pages/groups/Groups';
import Listings from '/imports/ui/pages/listings/Listings';
import Profile from '/imports/ui/pages/profile/Profile';
import LoggedRoute from '/imports/ui/components/LoggedRoute';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signin" component={Signin} />
      <LoggedRoute path="/board" component={Board} />
      <LoggedRoute path="/events" component={Events} />
      <LoggedRoute path="/groups" component={Groups} />
      <LoggedRoute path="/listings" component={Listings} />
      <LoggedRoute path="/profile" component={Profile} />
    </Switch>
    <ToastContainer />
  </Router>
);

export default App;
