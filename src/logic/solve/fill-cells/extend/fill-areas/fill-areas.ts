import { isEqual } from "lodash";
import {
  CellStatus,
  SeparatedArea,
  SeparatedPattern,
} from "../../../../helper/type";
import { fillFromEdges } from "../../fill-from-edges.ts/index";

/**
 * nums と area の組み合わせが確定している場合埋める
 */
export const fillFixedSets = (
  nums: number[],
  areas: SeparatedArea[],
  patterns: SeparatedPattern[],
  currentCells: CellStatus[]
) => {
  const fixedAreas = getFixedNumsInArea(patterns);

  if (fixedAreas.length === 0) {
    return currentCells;
  }

  return updatedCellsByFixedArea(areas, fixedAreas, currentCells);
};

// 確定した area と nums の組み合わせを探す
// TODO 【改善】 空白などを検知してよりよく確定したい
export const getFixedNumsInArea = (
  patterns: SeparatedPattern[]
): { fixedArea: number[]; startIndex: number }[] => {
  // Row Column を入れ替え
  let sameIndexAreas = patterns[0].map((col, i) =>
    patterns.map((row) => row[i])
  );

  // すべて同じ要素の are を取り出す
  let fixedAreas: { fixedArea: number[]; startIndex: number }[] = sameIndexAreas
    .filter((indexedArea, i) => {
      const isFixed = indexedArea.every((e, j) => {
        if (j === 0) {
          return true;
        }

        return isEqual(sameIndexAreas[i][j - 1], e);
      });

      if (isFixed) {
        return true;
      }

      return false;
    })
    .map((e) => ({ fixedArea: e[0].area, startIndex: e[0].startIndex }));

  return fixedAreas;
};

// TODO まずはロジックを再利用するが、後で良い方法を考える
// fixedArea でそれぞれ埋める
export const updatedCellsByFixedArea = (
  areas: SeparatedArea[],
  fixedAreas: { fixedArea: number[]; startIndex: number }[],
  currentCells: CellStatus[]
) => {
  const filledAreaWithIndexes: {
    filledArea: CellStatus[];
    startIndex: number;
  }[] = fixedAreas.map((e) => {
    console.log({ e, areas });

    const separatedArea = areas.find(
      (area) => area.startIndex === e.startIndex
    );

    if (!separatedArea) {
      return { filledArea: [], startIndex: e.startIndex };
    }

    return {
      filledArea: fillFromEdges(
        e.fixedArea,
        Array(separatedArea.areaLength).fill(CellStatus.UNKNOWN) as CellStatus[]
      ),
      startIndex: e.startIndex,
    };
  });

  // currentCellを更新する
  let _currentCells = [...currentCells];

  for (const e of filledAreaWithIndexes) {
    // TODO
    _currentCells = _currentCells.map((currentCell, i) => {
      if (i >= e.startIndex && i < e.startIndex + e.filledArea.length) {
        // 結合して TRUE を優先する
        if (
          currentCell === CellStatus.TRUE ||
          e.filledArea[i - e.startIndex] === CellStatus.TRUE
        ) {
          return CellStatus.TRUE;
        }

        return e.filledArea[i - e.startIndex];
      }

      return currentCell;
    });
  }

  return _currentCells;
};
