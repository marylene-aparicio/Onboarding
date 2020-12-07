import React, { useCallback, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import Container from '/imports/ui/components/Container';
import ProfileCreateStepOne from '/imports/ui/pages/profile/profileCreateSteps/ProfileCreateStepOne';
import ProfileCreateStepTwo from '/imports/ui/pages/profile/profileCreateSteps/ProfileCreateStepTwo';

const ProfileCreate = () => {

  const [express, setExpress] = useState('');
  const [hiringType, setHiringType] = useState('');
  const [eureciaAccount, setEureciaAccount] = useState('');
  const [biCubeAccount, setBiCubeAccount] = useState('');
  const [umlautMission, setUmlautMission] = useState('');
  const [clientMission, setClientMission] = useState('');
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
  currentStep = useState(1); 

  const handleChange = useCallback((event) => {
    switch (event.target.name) {
      case 'express':
        setExpress(event.target.value);
        break;
      case 'hiringType':
        setHiringType(event.target.value);
        break;
      case 'eureciaAccount':
        setEureciaAccount(event.target.value);
        break;
      case 'biCubeAccount':
        setBiCubeAccount(event.target.value);
        break;
      case 'umlautMission':
        setUmlautMission(event.target.value);
        break;
      case 'clientMission':
        setClientMission(event.target.value);
        break;
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

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    Meteor.call('employee.create', { express, hiringType, eureciaAccount, biCubeAccount, umlautMission, clientMission }, 
    (error) => {
      if (error) {
        toast.error(error.reason);
      } else {
        toast.success("l'enregistrement des données c'est bien passé");
        setExpress('');
        setHiringType('');
        setEureciaAccount('');
        setBiCubeAccount('');
        setUmlautMission('');
        setClientMission('');
        setFirstName('');
        setSecondName('');
        setNationality('');
        setMail('');
        setJobName('');
        setJobLocation('');
        setDepartment('');
        setManager('');
        setClientName('');
        setArrival('');
        setDeparture('');
      }
    });

  }, [ 
    express, 
    hiringType, 
    eureciaAccount, 
    biCubeAccount, 
    umlautMission, 
    clientMission,
    firstName,
    secondName,
    nationality,
    mail,
    jobName,
    jobLocation,
    department,
    manager,
    clientName,
    arrival,
    departure,
  ]); 

  return (
    <Container height="100%" padding="20px">
      <Link to="/board">Home</Link>
      <form onSubmit={handleSubmit}>
        <Switch>
          <Route path="/newProfile/stepOne" 
            component={ProfileCreateStepOne} 
            handleChange={handleChange}
            express={express}
            hiringType={hiringType}
            eureciaAccount={eureciaAccount}
            biCubeAccount={biCubeAccount}
            umlautMission={umlautMission}
            clientMission={clientMission}
          />
          <Route path="/newProfile/stepTwo" 
            component={ProfileCreateStepTwo} 
            handleChange={handleChange}
            firstName={firstName}
            secondName={secondName}
            nationality={nationality}
            mail={mail}
            jobName={jobName}
            jobLocation={jobLocation}
            department={department}
            manager={manager}
            clientName={clientName}
            arrival={arrival}
            departure={departure}
          />
        </Switch>
      </form>
    </Container>
  )
};

export default ProfileCreate;
