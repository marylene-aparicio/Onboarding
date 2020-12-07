import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from '/imports/ui/components/Container';
import ProfileDetails from '/imports/ui/pages/profile/profileContent/profileComponents/ProfileDetails';
import ProfileSteps from '/imports/ui/pages/profile/profileContent/profileComponents/ProfileSteps';
import ProfileTasks from '/imports/ui/pages/profile/profileContent/profileComponents/ProfileTasks';
import ProfileAlerts from '/imports/ui/pages/profile/profileContent/profileComponents/ProfileAlerts';

const Profile = () => {
  
  return (
    <Container>
      <Switch>
        <Route path="/profile/tasks" component={ProfileTasks} />
        <Route path="/profile/steps" component={ProfileSteps} />
        <Route path="/profile/alerts" component={ProfileAlerts}/>    
        <Route path="/profile/details" component={ProfileDetails}/> 
      </Switch>
    </Container>
  )
};

export default Profile;
