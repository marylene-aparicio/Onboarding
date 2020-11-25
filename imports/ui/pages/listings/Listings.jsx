import React from 'react';

import Container from '/imports/ui/components/Container';
import ListingByDate from '/imports/ui/pages/listings/listingBy/ListingByDate';
import ListingByDepartment from '/imports/ui/pages/listings/listingBy/ListingByDepartment';
import ListingByName from '/imports/ui/pages/listings/listingBy/ListingByName';

const Listings = () => (
  <Container>
    <h2>Listings</h2>
    <hr />
    <ListingByDate />
    <ListingByName />
    <ListingByDepartment />
    <a href="Board">Board</a>
  </Container>
);

export default Listings;
