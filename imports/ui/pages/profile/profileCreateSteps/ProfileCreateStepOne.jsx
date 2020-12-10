import React, { useCallback, useState } from 'react';
import { Link } from 'react-router-dom';

import Container from '/imports/ui/components/Container';
import Flex from '/imports/ui/components/Flex';
import Title from '/imports/ui/components/Title';

const ProfileCreateStepOne = () => {

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
        <Title level="2">Newcomer - Step one</Title>
          <div>
            <h3>Arrival</h3>
            <hr/>
            <label>Express</label>
            <input 
              type="checkbox" 
              name="express" 
              value={employee.express}
              onChange={handleChange} 
              required
            />
          </div>  
          <div>
            <h3>Hiring Type</h3>
            <hr/>
            <label>Employee</label>
            <input 
              type="radio" 
              name="employee" 
              value={employee.hiringType} 
              onChange={handleChange}
              checked
            />
            <label>Sub-contractor / Freelance</label>
            <input 
              type="radio" 
              name="freelanceSBC"
              value={employee.hiringType} 
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
              value={employee.eureciaAccount} 
              onChange={handleChange}
              required
            />
            <label>Bi-cube</label>
            <input 
              type="checkbox" 
              name="biCubeAccount"
              value={employee.biCubeAccount}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <h3>Client</h3>
            <hr/>
            <label>Umlaut</label>
            <input 
              type="checkbox"
              name="umlautMission"
              value={employee.umlautMission}
              onChange={handleChange}
              required
            />
            <label>Other</label>
            <input 
              type="checkbox"
              name="clientMission"
              value={employee.clientMission}
              onChange={handleChange}
              required
            />
          </div>
          <Link to="/newProfile/stepTwo">Next</Link>
      </Flex>
    </Container>
  )
};

export default ProfileCreateStepOne;
