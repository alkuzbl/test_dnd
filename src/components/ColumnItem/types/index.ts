import { CardType } from 'redux/types';

export type ColumnItemPropsType = {
  title: string;
  boardId: string;
  cardIndex: number;
  currentCard: CardType;
};
