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
        history.push('/Board');
      }
    });
  }, [username, password]);

  return (
    <Container height="100%">
      <Flex>
        <Container height="100%" width="50%" bgColor="white">
          <Flex column justify="center" bgColor="white" width="50%">
            <Title align="center" level="1">Welcome Onboard</Title>
            <form onSubmit={handleSubmit}>
              <Flex column alignItems="center">
                <Input
                  type="password"
                  placeholder="pseudo"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  required
                />
                <Input
                  type="password"
                  placeholder="mot de passe"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
                <Button
                  type="submit"
                  content="ok"
                />
                <img src="/logo.png" alt="umlaut logo"/>
              </Flex>
            </form>
          </Flex>
        </Container>
      </Flex>
    </Container>
  );
};

export default Signin;
