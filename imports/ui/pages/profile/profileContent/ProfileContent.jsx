import React from 'react';

import Container from '/imports/ui/components/Container';
import ProfileDetails from '/imports/ui/pages/profile/profileContent/profileComponents/ProfileDetails';
import ProfileSteps from '/imports/ui/pages/profile/profileContent/profileComponents/ProfileSteps';
import ProfileTasks from '/imports/ui/pages/profile/profileContent/profileComponents/ProfileTasks';
import ProfileAlerts from '/imports/ui/pages/profile/profileContent/profileComponents/ProfileAlerts';

const Profile = () => {
    return (
        <Container>
            <h3>Profile content</h3><hr/>
            <ProfileDetails/>
            <ProfileSteps/>
            <ProfileTasks/>
            <ProfileAlerts/>
            <a href="Signin">Signin</a><br/>
            <a href="Signup">Signup</a><br/>
            <a href="Listings">Listings</a><br/>
            <a href="Groups">Groups</a><br/>
            <a href="Events">Events</a><br/>
            <a href="Board">Board</a>
        </Container>
    );
};

export default Profile;