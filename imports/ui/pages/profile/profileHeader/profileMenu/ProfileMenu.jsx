import React from 'react';
import { Link } from 'react-router-dom';

const ProfileMenu = () => {

  return (
    <div>
      <h4>Profile Menu</h4>
      <Link to="/profile">Profile |</Link>
      <Link to="/profile/tasks">Tasks |</Link>
      <Link to="/profile/alerts">Alerts |</Link>
      <Link to="/profile/steps">Steps</Link>
    </div>
  )
};

export default ProfileMenu;
