import React from 'react';

import './App.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { useSelector } from 'react-redux';

import { Column, Header } from 'components';
import { RootStateType } from 'redux/store';
import { BoardsType } from 'redux/types';

const App = () => {
  const boards = useSelector<RootStateType, BoardsType>(state => state.boards.data);

  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl">
        <Grid container spacing={2} mt={2}>
          {boards.map(board => (
            <Column
              key={board.id}
              title={board.boardTitle}
              cards={board.cardsList}
              boardId={board.id}
            />
          ))}
        </Grid>
      </Container>
    </div>
  );
};

export default App;
