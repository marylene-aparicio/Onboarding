import React, { useState, useCallback } from 'react';
import { Meteor } from 'meteor/meteor';
import { toast } from 'react-toastify';

import Flex from '/imports/ui/components/Flex';
import Input from '/imports/ui/components/Input';
import Title from '/imports/ui/components/Title';
import Button from '/imports/ui/components/Button';
import Container from '/imports/ui/components/Container';

const Signin = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = useCallback((event) => {
    switch (event.target.name) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      // no default
    }
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        toast.error(error.reason);
      } else {
        history.push('/');
      }
    });
  }, [username, password]);

  return (
    <Container>
      <a href="Signup">Signup</a>
      <a href="Listings">Listings</a>
      <a href="Groups">Groups</a>
      <a href="Events">Events</a>
      <a href="Board">Board</a>
      <Flex column justify="center">
        <Title level="1">Welcome Onboard</Title>
        <form onSubmit={handleSubmit}>
          <Flex column alignItems="center">
            <Input
              type="text"
              placeholder="pseudo"
              name="username"
              value={username}
              onChange={handleChange}
            />
            <Input
              type="password"
              placeholder="mot de passe"
              name="password"
              value={password}
              onChange={handleChange}
            />
            <Button
              type="submit"
              content="ok"
            />
          </Flex>
        </form>
      </Flex>
    </Container>
  );
};

export default Signin;
