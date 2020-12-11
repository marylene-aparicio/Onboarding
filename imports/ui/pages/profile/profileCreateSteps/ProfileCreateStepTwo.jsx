import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';

import Container from '/imports/ui/components/Container';
import Flex from '/imports/ui/components/Flex';
import Title from '/imports/ui/components/Title';
import Input from '/imports/ui/components/Input';
import Button from '/imports/ui/components/Button';

const ProfileCreateStepTwo = () => {

  const [employee, setEmployee] = useState('');

  const departmentSelectOptions = [
    {value: "Corporate function", label: "Corporate function"},
    {value: "Account management", label: "Account management"},
    {value: "Digitalisation", label: "Digitalisation"},
    {value: "Software dev", label: "Software"},
    {value: "Consulting", label: "Consulting"},
    {value: "Automotive", label: "Automotive"},
    {value: "Airframe", label: "Airframe"},
    {value: "Manufacturing", label: "Manufacturing"} 
  ];

  const jobLocationSelectOptions = [
    {value: "Blagnac", label: "Blagnac"},
    {value: "Nantes", label: "Nantes"},
    {value: "Marseille", label: "Marseille"},
    {value: "Paris", label: "Paris"},
  ];

  const managerSelectOptions = [
    {value: "Manager 1", label: "Manager 1"},
    {value: "Manager 2", label: "Manager 2"},
    {value: "Manager 3", label: "Manager 3"},
    {value: "Manager 4", label: "Manager 4"},
    {value: "Manager 5", label: "Manager 5"},
  ];

  const clientNameSelectOptions = [
    {value: "Airbus", label: "Airbus"},
    {value: "Peugeot", label: "Peugeot"},
    {value: "Renault", label: "Renault"},
  ];

  const handleChange = useCallback((event) => {
    switch (event.target.name) {
      case 'employee':
        setEmployee(event.target.value);
        break;
      // case 'firstName':
      //   setFirstName(event.target.value);
      //   break;
      // case 'secondName':
      //   setSecondName(event.target.value);
      //   break;
      // case 'nationality':
      //   setNationality(event.target.value);
      //   break;
      // case 'mail':
      //   setMail(event.target.value);
      //   break;
      // case 'jobName':
      //   setJobName(event.target.value);
      //   break;
      // case 'jobLocation':
      //   setJobLocation(event.target.value);
      //   break;
      // case 'department':
      //   setDepartment(event.target.value);
      //   break;
      // case 'manager':
      //   setManager(event.target.value);
      //   break;
      // case 'clientName':
      //   setClientName(event.target.value);
      //   break;
      // case 'arrival':
      //   setArrival(event.target.value);
      //   break;
      // case 'departure':
      //   setDeparture(event.target.value);
      //   break;
      // no default
    }
  }, []);

  const customStyles = {
    // option: (provided, state) => ({
    //   ...provided,
    //   borderBottom: '1px dotted pink',
    //   color: state.isSelected ? 'red' : 'blue',
    //   padding: 20,
    // }),
    control: () => ({
      backgroundColor: 'white',
      fontSize: '1em',
      margin: '0.3em',
      border: '1px solid black',
      borderRadius: 30,
      height: 30,
    }),
  }

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
          <Select
            type="text" 
            name="jobLocation" 
            value={employee.jobLocation}
            onChange={handleChange} 
            options={jobLocationSelectOptions}
            styles={customStyles}
            required
          />
          <label>Department</label>
          <Select 
            type="text" 
            name="department" 
            value={employee.department}
            onChange={handleChange}
            options={departmentSelectOptions}
            styles={customStyles}
            required
          /> 
          <label>Manager</label>
          <Select 
            type="text" 
            name="manager" 
            value={employee.manager}
            onChange={handleChange} 
            options={managerSelectOptions}
            styles={customStyles}
            required
          />
          <label>Client name</label>
          <Select
            type="text" 
            name="clientName" 
            value={employee.clientName}
            onChange={handleChange} 
            options={clientNameSelectOptions}
            styles={customStyles}
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
