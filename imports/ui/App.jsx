import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

// import LoggedRoute from 'imports/ui/Components/LoggedRoute';

import Signin from '/imports/ui/pages/login/Signin';
import Signup from '/imports/ui/pages/login/Signup';
import Board from '/imports/ui/pages/board/Board';
import Events from '/imports/ui/pages/events/Events';
import Groups from '/imports/ui/pages/groups/Groups';
import Listings from '/imports/ui/pages/listings/Listings';
import Profiles from '/imports/ui/pages/profile/Profile';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Signin} />
      <Route path="/signin" component={Signin} />
      <Route path="/signup" component={Signup} />
      <Route path="/board" component={Board} />
      <Route path="/events" component={Events} />
      <Route path="/groups" component={Groups} />
      <Route path="/listings" component={Listings} />
      <Route path="/profiles" component={Profiles} />
    </Switch>
    <ToastContainer />
  </Router>
);

export default App;