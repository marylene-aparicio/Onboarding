import React, { useCallback, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { toast } from 'react-toastify'

import Container from '/imports/ui/components/Container';
import ProfileCreateStepOne from '/imports/ui/pages/profile/profileCreateSteps/ProfileCreateStepOne';
import ProfileCreateStepTwo from '/imports/ui/pages/profile/profileCreateSteps/ProfileCreateStepTwo';

const ProfileCreate = () => {

  const [employee, setEmployee] = useState({
    express: '',
    hiringType: '',
    eureciaAccount: '',
    biCubeAccount: '',
    umlautMission: '',
    clientMission: '',
    firstName:'',
    secondName:'',
    nationality:'',
    mail:'',
    jobName:'',
    jobLocation:'',
    department:'',
    manager:'',
    clientName:'',
    arrival: {
      date: '',
      validated:''
    },
    departure: {
      date:'',
      validated:''
    }
  });

  const handleSubmit = useCallback((event) => {
    event.preventDefault();

    Meteor.call('employee.create', { employee },
      (error) => {
        if (error) {
          toast.error(error.reason);
        } else {
          toast.success("l'enregistrement des données s'est bien passé");
          setEmployee('');
        }
      });
  }, [employee]);

  return (
    <Container height="100%" padding="20px">
      <Link to="/board">Home</Link>
      <form onSubmit={handleSubmit}>
        <Switch>
          <Route path="/newProfile/stepOne"
            component={ProfileCreateStepOne}
            employee={employee}
          />
          <Route path="/newProfile/stepTwo"
            component={ProfileCreateStepTwo}
            employee={employee}
          />
        </Switch>
      </form>
    </Container>
  )
};

export default ProfileCreate;