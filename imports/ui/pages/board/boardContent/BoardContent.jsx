import React, { useMemo, useCallback } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';

import Container from '/imports/ui/components/Container';

const BoardContent = () => {

  const connected = useTracker(() => Meteor.userId(), []);

  const logout = useCallback(() => {
    Meteor.logout();
  }, []);

  const connectionLink = useMemo(() => {
    if(connected) {
      return (
        <a href="/" onClick={logout}>Déconnexion</a>
      );
    }
  }, [connected]);

  return (
    <Container>
      <h3>Board Content</h3>
      {connectionLink}
      <br />
      <a href="Signin">Signin</a>
      <br />
      <a href="Listings">Listings</a>
      <br />
      <a href="Profile">Profile</a>
      <br />
      <a href="Events">Events</a>
      <br />
    </Container>
  );
};

export default BoardContent;
