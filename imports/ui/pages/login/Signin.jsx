import React from 'react';

import Container from '/imports/ui/components/Container';

const Signin = () => {
    return (
        <Container>
            <h2>You are in Signin</h2><hr/>
            <a href="Signup">Signup</a><br/>
            <a href="Listings">Listings</a><br/>
            <a href="Groups">Groups</a><br/>
            <a href="Events">Events</a><br/>
            <a href="Board">Board</a>
        </Container>
    );
};

export default Signin;