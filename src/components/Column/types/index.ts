import { CardType } from 'redux/types';

export type ColumnPropsType = {
  title: string;
  cards: CardType[];
  boardId: string;
};
