import React from 'react';

import Container from '/imports/ui/components/Container';

const BoardContent = () => {
    return (
        <Container>
            <h3>Board Content</h3>
            <a href="Signin">Signin</a><br/>
            <a href="Signup">Signup</a><br/>
            <a href="Listings">Listings</a><br/>
            <a href="Groups">Groups</a><br/>
            <a href="Events">Events</a><br/>
            <a href="Board">Board</a><hr/>
        </Container>
    );
};

export default BoardContent;