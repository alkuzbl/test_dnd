import React, { useState } from 'react';

import './App.css';
import { Grid } from '@mui/material';
import Container from '@mui/material/Container';
import { v1 } from 'uuid';

import { Column, Header } from 'components';

export type CardType = {
  title: string;
  id: string;
  order: number;
};
export type BoardType = {
  id: string;
  boardTitle: string;
  cardsList: CardType[];
};
export type BoardsType = BoardType[];
const boards = [
  {
    id: v1(),
    boardTitle: 'Table-1',
    cardsList: [
      { id: v1(), order: 1, title: '1' },
      { id: v1(), order: 2, title: '2' },
      { id: v1(), order: 3, title: '3' },
      { id: v1(), order: 4, title: '4' },
      { id: v1(), order: 5, title: '5' },
      { id: v1(), order: 6, title: '6' },
    ],
  },
  {
    id: v1(),
    boardTitle: 'Table-2',
    cardsList: [
      { id: v1(), order: 1, title: '1' },
      { id: v1(), order: 2, title: '2' },
      { id: v1(), order: 3, title: '3' },
      { id: v1(), order: 4, title: '4' },
      { id: v1(), order: 5, title: '5' },
      { id: v1(), order: 6, title: '6' },
      { id: v1(), order: 7, title: '7' },
      { id: v1(), order: 8, title: '8' },
      { id: v1(), order: 9, title: '9' },
      { id: v1(), order: 10, title: '10' },
    ],
  },
];

const App = () => {
  const [board, setBoard] = useState<BoardsType>(boards);
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={2} mt={2}>
          {board.map(({ boardTitle, id, cardsList }) => (
            <Column
              title={boardTitle}
              cards={cardsList}
              dropItemID={id}
              key={id}
              setBoard={setBoard}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
