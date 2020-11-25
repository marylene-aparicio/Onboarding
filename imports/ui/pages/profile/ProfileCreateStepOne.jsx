import React from 'react';

import Container from '/imports/ui/components/Container';
import Flex from '/imports/ui/components/Flex';
import Title from '/imports/ui/components/Title';
import Button from '/imports/ui/components/Button';

const ProfileCreateStepOne = () => {

  return (
    <Container>
      <h2>ProfileCreate</h2>
      <Flex column justifyContent="flex-start">
        <Title level="2">Newcomer - Step one</Title>
        <form>
          <div>
            <h3>Arrival</h3>
            <hr/>
            <input type="checkbox" id="express" name="express"/>
            <label for="express">Express</label>
          </div>  
          <div>
            <h3>Hiring Type</h3>
            <hr/>
            <input type="radio" id="employee" name="hiringType" value="employee" checked/>
            <label for="employee">Employee</label>
            <input type="radio" id="freelance" name="hiringType" value="freelance"/>
            <label for="freelance">Sub-contractor / Freelance</label>
          </div>
          <div>
            <h3>Account</h3>
            <hr/>
            <input type="checkbox" id="eurecia" name="eurecia"/>
            <label for="eurecia">Eurecia</label>
            <input type="checkbox" id="biCube" name="biCube"/>
            <label for="biCube">Bi-cube</label>
          </div>
          <div>
            <h3>Client</h3>
            <hr/>
            <input type="checkbox" id="umlaut" name="umlaut"/>
            <label for="umlaut">Umlaut</label>
            <input type="checkbox" id="other" name="other"/>
            <label for="other">Other</label>
          </div>
          <div>
            <Button to="/profileCreateStepTwo">Next</Button>
            {/* <Button type="submit">Save</Button> */}
          </div>
        </form>
      </Flex>
    </Container>
  )
};

export default ProfileCreateStepOne;
