import React, { useCallback } from 'react';


const ProfileMenu = () => {

  const displayProfile = useCallback(() => {
    const displayContent = 1 ;
  });
  const displaySteps = useCallback(() => {
    const displayContent = 2 ;
  });

  return (
    <div>
      <h4>Profile Menu</h4>
      <a onClick={displayProfile} href="Profile">Profile |</a>
      <a onClick={displaySteps} href=""> Steps |</a>
      <a href=""> Tasks |</a>
      <a href=""> Alerts |</a>
    </div>
  )
};

export default ProfileMenu;
