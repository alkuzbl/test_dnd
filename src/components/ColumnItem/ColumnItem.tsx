import React, { FC } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import { v1 } from 'uuid';

import { ColumnItemPropsType } from 'components/ColumnItem/types';
import { removeDropCard, setCurrentCard, setDropCard } from 'redux/slice/boards-slice';

export const ColumnItem: FC<ColumnItemPropsType> = props => {
  const { title, boardId, cardIndex, currentCard } = props;

  const dispatch = useDispatch();

  const handleDragStart = () => {
    dispatch(setCurrentCard({ currentCard, boardId, cardIndex }));
  };

  const handleOnDragEnd = () => {
    // e.target.style.boxShadow = 'none';
  };

  const handleOnDragLeave = (e: any) => {
    e.target.style.boxShadow = 'none';
  };

  const handleOnDragOver = (e: any) => {
    e.preventDefault();
    e.target.style.boxShadow = '0 4px 3px gray';
  };

  const handleOnDrop = (e: any) => {
    e.preventDefault();
    // e.target.style.boxShadow = 'none';

    dispatch(removeDropCard());
    dispatch(setDropCard({ dropIndex: cardIndex, boardId }));
  };

  return (
    <Box
      key={v1()}
      bgcolor="#c4c4c4"
      border={1}
      borderColor="#c4c4c4"
      mb={2}
      draggable
      onDragStart={handleDragStart}
      onDragLeave={handleOnDragLeave}
      onDragEnd={handleOnDragEnd}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
    >
      <Typography variant="h6" padding={2}>
        {title}
      </Typography>
    </Box>
  );
};
