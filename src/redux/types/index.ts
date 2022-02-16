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
export type DropDataType = {
  dropIndex: number;
  boardId: string;
};
export type CurrentCardType = {
  currentCard: CardType;
  boardId: string;
  cardIndex: number;
};
export type InitialStateType = {
  dropData: DropDataType;
  currentCard: CurrentCardType;
  data: BoardsType;
};
export type BoardsType = BoardType[];
