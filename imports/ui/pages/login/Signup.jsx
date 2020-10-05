import React from 'react';

import Container from '/imports/ui/components/Container';

const Signup = () => {
    return (
        <Container>
            <h2>You are in Signup</h2><hr/>
            <a href="Signin">Signin</a><br/>
            <a href="Listings">Listings</a><br/>
            <a href="Groups">Groups</a><br/>
            <a href="Events">Events</a><br/>
            <a href="Board">Board</a>
        </Container>
    );
};

export default Signup;