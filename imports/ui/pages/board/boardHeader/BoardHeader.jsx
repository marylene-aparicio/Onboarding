import React, { useMemo, useCallback } from 'react';
import { useTracker } from 'meteor/react-meteor-data';
import { Meteor } from 'meteor/meteor';


const BoardHeader = () => {

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
    <div>
      <h3>Board Header</h3>
      {connectionLink}
      <hr />
    </div>
  );
};

export default BoardHeader;
