import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const LoggedRoute = (props) => {
  const connected = useTracker(() => Meteor.userId(), []);

  if (!connected) {
    return (
      <Redirect to="/" />
    );
  }

  return (
    <Route {...props} />
  );
};

export default LoggedRoute;
