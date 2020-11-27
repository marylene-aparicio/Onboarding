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
      }
    });

  }, [ 
    express, 
    hiringType, 
    eureciaAccount, 
    biCubeAccount, 
    umlautMission, 
    clientMission
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
          />
        </Switch>
      </form>
    </Container>
  )
};

export default ProfileCreate;
