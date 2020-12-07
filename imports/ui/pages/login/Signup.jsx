import { Accounts } from 'meteor/accounts-base';
import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';

import Title from '/imports/ui/components/Title';
import Button from '/imports/ui/components/Button';
import Flex from '/imports/ui/components/Flex';
import Container from '/imports/ui/components/Container';
import Input from '/imports/ui/components/Input';

const Signup = ({ history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [verify, setVerify] = useState('');

  const handleChange = useCallback((event) => {
    switch (event.target.name) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
      case 'verify':
        setVerify(event.target.value);
        break;
            // no default
    }
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    if (password !== verify) {
      toast.error('Le mot de passe ne correspond pas.');
      return;
    }

    Accounts.createUser({ username, password }, (error) => {
      if (error) {
        toast.error(error.reason);
      } else {
        history.push('/Board');
      }
    });
  }, [username, password, verify]);

  return (
    <Container>
      <Flex>
        <Container width="50%" bgColor="white">
          <Title level="1">S&apos;inscrire</Title>
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
              <Input
                type="password"
                placeholder="vérification"
                name="verify"
                value={verify}
                onChange={handleChange}
              />
              <div>
                <Button type="submit">Inscription</Button>
              </div>
            </Flex>
          </form>
        </Container>
      </Flex>
    </Container>
  );
};

export default Signup;
