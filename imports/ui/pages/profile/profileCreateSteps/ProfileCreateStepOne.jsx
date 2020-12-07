import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '/imports/ui/components/Container';
import Flex from '/imports/ui/components/Flex';
import Title from '/imports/ui/components/Title';

const ProfileCreateStepOne = () => {

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

  return (
    <Container>
      <Flex column justifyContent="flex-start">
        <Title level="2">Newcomer - Step one</Title>
          <div>
            <h3>Arrival</h3>
            <hr/>
            <label>Express</label>
            <input 
              type="checkbox" 
              name="express" 
              value={express}
              onChange={handleChange} 
            />
          </div>  
          <div>
            <h3>Hiring Type</h3>
            <hr/>
            <label>Employee</label>
            <input 
              type="radio" 
              name="hiringType" 
              value={hiringType} 
              onChange={handleChange}
              checked
            />
            <label>Sub-contractor / Freelance</label>
            <input 
              type="radio" 
              name="hiringType"
              value={hiringType} 
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Account</h3>
            <hr/>
            <label>Eurecia</label>
            <input 
              type="checkbox" 
              name="eureciaAccount"
              value={eureciaAccount} 
              onChange={handleChange}
            />
            <label>Bi-cube</label>
            <input 
              type="checkbox" 
              name="biCubeAccount"
              value={biCubeAccount}
              onChange={handleChange}
            />
          </div>
          <div>
            <h3>Client</h3>
            <hr/>
            <label>Umlaut</label>
            <input 
              type="checkbox"
              name="umlautMission"
              value={umlautMission}
              onChange={handleChange}
            />
            <label>Other</label>
            <input 
              type="checkbox"
              name="clientMission"
              value={clientMission}
              onChange={handleChange}
            />
          </div>
          <Link to="/newProfile/stepTwo">Next</Link>
      </Flex>
    </Container>
  )
};

export default ProfileCreateStepOne;
