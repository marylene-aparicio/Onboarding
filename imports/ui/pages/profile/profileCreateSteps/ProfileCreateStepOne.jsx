import React from 'react';
import { Link } from 'react-router-dom';

import Container from '/imports/ui/components/Container';
import Flex from '/imports/ui/components/Flex';
import Title from '/imports/ui/components/Title';

const ProfileCreateStepOne = () => {
  
  if (currentStep !== 1) {
    return null
  }

  return (
    <Container>
      <Flex column justifyContent="flex-start">
        <Title level="2">Newcomer - Step one</Title>
          <div>
            <h3>Arrival</h3>
            <hr/>
            <input 
              type="checkbox" 
              name="express" 
              value={express} 
              onChange={handleChange}
            />
            <label>Express</label>
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
