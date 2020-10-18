import React from 'react';

import Container from '/imports/ui/components/Container';
import BoardHeader from '/imports/ui/pages/board/boardHeader/BoardHeader';
import BoardContent from '/imports/ui/pages/board/boardContent/BoardContent';

const Board = () => (
  <Container>
    <h2>Board</h2>
    <BoardHeader />
    <BoardContent />
  </Container>
);

export default Board;
