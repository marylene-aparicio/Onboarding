import React from 'react';
import { Link } from 'react-router-dom';

import Container from '/imports/ui/components/Container';

const BoardContent = () => {

  return (
    <Container>
      <Link to="/listings">Listings</Link>
      <br />
      <Link to="/profile/details">Profile</Link>
      <br />
      <Link to="/newProfile/stepOne">Create Newcomer</Link>
    </Container>
  );
};

export default BoardContent;
