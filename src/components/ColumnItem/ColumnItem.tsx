import React, { FC } from 'react';

import Box from '@mui/material/Box';
import { v1 } from 'uuid';

type ColumnItemPropsType = {
  title: string;
  id: string;
  order: number;
  setBoard: (value: any) => void;
};
export const ColumnItem: FC<ColumnItemPropsType> = props => {
  const { title, id, order, setBoard } = props;

  const handleDragStart = (e: any) => {
    e.target.style.opacity = 0.5;
    console.log(order);
    setBoard([]);
  };

  const handleOnDragEnd = (e: any) => {
    e.target.style.opacity = 1;
  };

  const handleOnDragOver = (e: any) => {
    e.preventDefault();
  };
  const handleOnDrop = (e: any) => {
    e.preventDefault();
    console.log(order);
  };

  return (
    <Box
      key={v1()}
      bgcolor="#c4c4c4"
      border={1}
      borderColor="#c4c4c4"
      mb={2}
      draggable
      id={id}
      onDragStart={handleDragStart}
      onDragLeave={handleOnDragEnd}
      onDragOver={handleOnDragOver}
      onDrop={handleOnDrop}
      onDragEnd={handleOnDragEnd}
    >
      {title}
    </Box>
  );
};
