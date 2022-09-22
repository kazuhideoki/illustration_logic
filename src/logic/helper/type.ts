export enum CellStatus {
  TRUE = "TRUE",
  FALSE = "FALSE",
  UNKNOWN = "UNKNOWN",
}

export type IndexedCellStatus = {
  index: number | null;
  cell: CellStatus;
};
