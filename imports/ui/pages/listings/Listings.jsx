import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Container from '/imports/ui/components/Container';
import ListingByDate from '/imports/ui/pages/listings/listingBy/ListingByDate';
import ListingByDepartment from '/imports/ui/pages/listings/listingBy/ListingByDepartment';
import ListingByName from '/imports/ui/pages/listings/listingBy/ListingByName';

const Listings = () => (
  <Container>
    <h2>Listings</h2>
    <hr />
    <Switch>
      <Route path="/listing/byDepartment" component={ListingByDepartment}/>    
      <Route path="/listing/byName" component={ListingByName} />
      <Route path="/listing/byDate" component={ListingByDate} />
    </Switch>
    <a href="Board">Board</a>
  </Container>
);

export default Listings;
