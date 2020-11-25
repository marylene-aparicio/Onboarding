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
import ProfileCreateStepOne from '/imports/ui/pages/profile/ProfileCreateStepOne';
import ProfileCreateStepTwo from '/imports/ui/pages/profile/ProfileCreateStepTwo';
import ProfileAlerts from '/imports/ui/pages/profile/profileContent/profileComponents/ProfileAlerts';
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
      <LoggedRoute path="/profileCreateStepOne" component={ProfileCreateStepOne} />
      <LoggedRoute path="/profileCreateStepTwo" component={ProfileCreateStepTwo}/>
      <LoggedRoute path="/profileAlerts" component={ProfileAlerts}/>
    </Switch>
    <ToastContainer />
  </Router>
);

export default App;
