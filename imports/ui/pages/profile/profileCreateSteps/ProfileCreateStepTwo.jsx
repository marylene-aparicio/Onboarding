import React from 'react';
import { Link } from 'react-router-dom';

import Container from '/imports/ui/components/Container';
import Flex from '/imports/ui/components/Flex';
import Title from '/imports/ui/components/Title';
import Input from '/imports/ui/components/Input';
import Button from '/imports/ui/components/Button';

const ProfileCreateStepTwo = () => {

  return (
    <Container>
      <Flex column justifyContent="flex-start">
        <Title level="2">Newcomer - Step two</Title>
        <Container width="30%">
            <label>First Name</label>
            <Input type="text" name="firstName" value={firstName} placeHolder="First Name"/>
            <label>Second Name</label>
            <Input type="text" name="secondName" value={secondName} placeHolder="Second Name"/>
            <label>Nationality</label>
            <Input type="text" name="nationality" value={nationality}/>
            <label>E-mail</label>
            <Input type="text" name="mail" value={mail}/>
            <label>Job</label>
            <Input type="text" name="jobName" value={jobName}/>
            <label>Location</label>
            <Input type="text" name="location" value={location}/>
            <label>Department</label>
            <Input type="text" name="department" value={department}/>
            <label>Manager</label>
            <Input type="text" name="manager" value={manager}/>
            <label>Client name</label>
            <Input type="text" name="clientName" value={clientName}/>
            <label>Estimated arrival date</label>
            <Input type="date" name="arrival.date" value={arrival.date}/>
            <label>Estimated departure date</label>
            <Input type="date" name="departure.date" value={departure.date}/>
            <div>
              <Link to="/newProfile/stepOne">Previous</Link>
              <Button type="submit">Save</Button>
            </div>
        </Container>
      </Flex>
    </Container>
  )
};

export default ProfileCreateStepTwo;
