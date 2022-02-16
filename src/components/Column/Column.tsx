import React, { FC } from 'react';

import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { v1 } from 'uuid';

import { CardType } from 'App';
import { ColumnItem } from 'components/ColumnItem/ColumnItem';

type ColumnPropsType = {
  title: string;
  cards: CardType[];
  dropItemID: string;
  setBoard: (value: any) => void;
};

export const Column: FC<ColumnPropsType> = props => {
  const { title, cards, dropItemID, setBoard } = props;

  return (
    <Grid
      id={dropItemID}
      item
      xs={6}
      border={1}
      borderColor="#c4c4c4"
      height="100vh"
      padding={2}
    >
      <Typography variant="h4" mb={4} textAlign="center">
        {title}
      </Typography>
      {cards.map(card => (
        <ColumnItem
          key={v1()}
          title={card.title}
          id={card.id}
          order={card.order}
          setBoard={setBoard}
        />
      ))}
    </Grid>
  );
};
