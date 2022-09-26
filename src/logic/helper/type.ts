export enum CellStatus {
  TRUE = "TRUE",
  FALSE = "FALSE",
  UNKNOWN = "UNKNOWN",
}

export type IndexedCellStatus = {
  index: number | null;
  cell: CellStatus;
};

export type Separation = {
  separationsLength: number;
  startIndex: number;
  endIndex: number;
};

export type NumSeparationPatterns = {
  numsInSeparation: number[];
  startIndex: number;
}[];
