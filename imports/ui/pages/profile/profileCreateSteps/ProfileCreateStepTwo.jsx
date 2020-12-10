import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '/imports/ui/components/Container';
import Flex from '/imports/ui/components/Flex';
import Title from '/imports/ui/components/Title';
import Input from '/imports/ui/components/Input';
import Button from '/imports/ui/components/Button';

const ProfileCreateStepTwo = () => {

  const [employee, setEmployee] = useState('');

  const handleChange = useCallback((event) => {
    switch (event.target.name) {
      case 'employee':
        setEmployee(event.target.value);
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
              value={employee.firstName} 
              placeHolder="First Name"
              onChange={handleChange} 
              required
            />
            <label>Second Name</label>
            <Input 
              type="text" 
              name="secondName" 
              value={employee.secondName} 
              placeHolder="Second Name"
              onChange={handleChange} 
              required
            />
            <label>Nationality</label>
            <Input 
              type="text" 
              name="nationality" 
              value={employee.nationality}
              onChange={handleChange}
              required 
            />
            <label>E-mail</label>
            <Input 
              type="text" 
              name="mail" 
              value={employee.mail}
              onChange={handleChange}
              required 
            />
            <label>Job</label>
            <Input 
              type="text" 
              name="jobName" 
              value={employee.jobName}
              onChange={handleChange} 
              required
            />
            <label>jobLocation</label>
            <Input 
              type="text" 
              name="jobLocation" 
              value={employee.jobLocation}
              onChange={handleChange} 
              required
            />
            <label>Department</label>
            <Input 
              type="text" 
              name="department" 
              value={employee.department}
              onChange={handleChange} 
              required
            />
            <label>Manager</label>
            <Input 
              type="text" 
              name="manager" 
              value={employee.Linkmanager}
              onChange={handleChange} 
              required
            />
            <label>Client name</label>
            <Input 
              type="text" 
              name="clientName" 
              value={employee.clientName}
              onChange={handleChange} 
              required
            />
            <label>Estimated arrival date</label>
            <Input 
              type="date" 
              name="arrival"
              value={employee.arrival}
              onChange={handleChange} 
              required
            />
            <label>Estimated departure date</label>
            <Input 
              type="date" 
              name="departure" 
              value={employee.departure}
              onChange={handleChange} 
              required
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
