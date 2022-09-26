export enum CellStatus {
  TRUE = "TRUE",
  FALSE = "FALSE",
  UNKNOWN = "UNKNOWN",
}

export type IndexedCellStatus = {
  index: number | null;
  cell: CellStatus;
};

export type SeparatedArea = {
  areaLength: number;
  startIndex: number;
  endIndex: number;
};

export type SeparatedPattern = { area: number[]; startIndex: number }[];
