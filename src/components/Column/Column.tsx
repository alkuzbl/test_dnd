import React, { FC } from 'react';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';

import { ColumnPropsType } from 'components/Column/types';
import { ColumnItem } from 'components/ColumnItem/ColumnItem';
import { removeDropCard, setDropCard } from 'redux/slice/boards-slice';

export const Column: FC<ColumnPropsType> = props => {
  const dispatch = useDispatch();

  const { title, cards, boardId } = props;

  const handleOnDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleOnDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (cards.length === 0) {
      dispatch(removeDropCard());
      dispatch(setDropCard({ dropIndex: 0, boardId }));
    }
  };

  return (
    <Grid
      item
      xs={6}
      border={1}
      borderColor="#c4c4c4"
      padding={2}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
    >
      <Typography variant="h4" mb={4} textAlign="center">
        {title}
      </Typography>
      {cards.map((card, index) => (
        <ColumnItem
          key={v1()}
          title={card.title}
          boardId={boardId}
          cardIndex={index}
          currentCard={card}
        />
      ))}
    </Grid>
  );
};
