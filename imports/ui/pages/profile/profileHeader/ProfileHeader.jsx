import React from 'react';
import { Link } from 'react-router-dom';

import ProfileMenu from '/imports/ui/pages/profile/profileHeader/profileMenu/ProfileMenu';

const ProfileHeader = () => (
  <div>
    <Link to="/board">Home</Link>
    <ProfileMenu />
    <hr />
  </div>
);

export default ProfileHeader;
