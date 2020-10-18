import React from 'react';

import Container from '/imports/ui/components/Container';
import ProfileHeader from '/imports/ui/pages/profile/profileHeader/ProfileHeader';
import ProfileContent from '/imports/ui/pages/profile/profileContent/ProfileContent';

const Profile = () => (
  <Container>
    <h2>Profile</h2>
    <hr />
    <ProfileHeader />
    <ProfileContent />
  </Container>
);

export default Profile;
