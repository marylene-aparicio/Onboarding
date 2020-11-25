import React from 'react';

import Container from '/imports/ui/components/Container';
import Flex from '/imports/ui/components/Flex';
import Title from '/imports/ui/components/Title';
import Input from '/imports/ui/components/Input';
import Button from '/imports/ui/components/Button';

const ProfileCreateStepTwo = () => {

  return (
    <Container>
      <h2>ProfileCreate</h2>
      <Flex column justifyContent="flex-start">
        <Title level="2">Newcomer - Step two</Title>
        <Container width="30%">
          <form>
            <label for="firstName">First Name</label>
            <Input type="text" name="firstName" placeHolder="First Name" required />
            <label for="secondName">Second Name</label>
            <Input type="text" name="secondName" placeHolder="Second Name" required />
            <label for="nationality">Nationality</label>
            <Input type="text" name="nationality"/>
            <label for="mail">E-mail</label>
            <Input type="text" name="mail"/>
            <label for="job">Job</label>
            <Input type="text" name="job"/>
            <label for="location">Location</label>
            <Input type="text" name="location"/>
            <div>
              <Button to="/ProfileCreateStepOne">Retour</Button>
              <Button type="submit">Save</Button>
            </div>
          </form>
        </Container>
      </Flex>
    </Container>
  )
};

export default ProfileCreateStepTwo;
