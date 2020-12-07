import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '/imports/ui/components/Container';
import Flex from '/imports/ui/components/Flex';
import Title from '/imports/ui/components/Title';
import Input from '/imports/ui/components/Input';
import Button from '/imports/ui/components/Button';

const ProfileCreateStepTwo = () => {

  const [firstName, setFirstName] = useState('');
  const [secondName, setSecondName] = useState('');
  const [nationality, setNationality] = useState('');
  const [mail, setMail] = useState('');
  const [jobName, setJobName] = useState('');
  const [jobLocation, setJobLocation] = useState('');
  const [department, setDepartment] = useState('');
  const [manager, setManager] = useState('');
  const [clientName, setClientName] = useState('');
  const [arrival, setArrival] = useState({
    date: '',
  });
  const [departure, setDeparture] = useState({
    date: '',
  });

  const handleChange = useCallback((event) => {
    switch (event.target.name) {
      case 'firstName':
        setFirstName(event.target.value);
        break;
      case 'secondName':
        setSecondName(event.target.value);
        break;
      case 'nationality':
        setNationality(event.target.value);
        break;
      case 'mail':
        setMail(event.target.value);
        break;
      case 'jobName':
        setJobName(event.target.value);
        break;
      case 'jobLocation':
        setJobLocation(event.target.value);
        break;
      case 'department':
        setDepartment(event.target.value);
        break;
      case 'manager':
        setManager(event.target.value);
        break;
      case 'clientName':
        setClientName(event.target.value);
        break;
      case 'arrival':
        setArrival(event.target.value);
        break;
      case 'departure':
        setDeparture(event.target.value);
        break;
      // no default
    }
  }, []);

  return (
    <Container>
      <Flex column justifyContent="flex-start">
        <Title level="2">Newcomer - Step two</Title>
        <Container width="30%">
            <label>First Name</label>
            <Input 
              type="text" 
              name="firstName" 
              value={firstName} 
              placeHolder="First Name"
              onChange={handleChange} 
            />
            <label>Second Name</label>
            <Input 
              type="text" 
              name="secondName" 
              value={secondName} 
              placeHolder="Second Name"
              onChange={handleChange} 
            />
            <label>Nationality</label>
            <Input 
              type="text" 
              name="nationality" 
              value={nationality}
              onChange={handleChange} 
            />
            <label>E-mail</label>
            <Input 
              type="text" 
              name="mail" 
              value={mail}
              onChange={handleChange} 
            />
            <label>Job</label>
            <Input 
              type="text" 
              name="jobName" 
              value={jobName}
              onChange={handleChange} 
            />
            <label>jobLocation</label>
            <Input 
              type="text" 
              name="jobLocation" 
              value={jobLocation}
              onChange={handleChange} 
            />
            <label>Department</label>
            <Input 
              type="text" 
              name="department" 
              value={department}
              onChange={handleChange} 
            />
            <label>Manager</label>
            <Input 
              type="text" 
              name="manager" 
              value={manager}
              onChange={handleChange} 
            />
            <label>Client name</label>
            <Input 
              type="text" 
              name="clientName" 
              value={clientName}
              onChange={handleChange} 
            />
            <label>Estimated arrival date</label>
            <Input 
              type="date" 
              name="arrival"
              value={arrival}
              onChange={handleChange} 
            />
            <label>Estimated departure date</label>
            <Input 
              type="date" 
              name="departure" 
              value={departure}
              onChange={handleChange} 
            />
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
