import { isEqual } from "lodash";
import {
  CellStatus,
  NumSeparationPatterns,
  Separation,
} from "../../../../helper/type";
import { fillFromEdges } from "../../fill-from-edges.ts/index";

/**
 * nums と separation の組み合わせが確定している場合埋める
 */
export const fillFixedSeparations = (
  nums: number[],
  separations: Separation[],
  patterns: NumSeparationPatterns[],
  currentCells: CellStatus[]
) => {
  const fixedSeparations = pickFixedNumsInSeparations(patterns);

  if (fixedSeparations.length === 0) {
    return currentCells;
  }

  return updatedCellsByFixedArea(separations, fixedSeparations, currentCells);
};

// 確定した separation と nums の組み合わせを探す
// TODO 【改善】 空白などを検知してよりよく確定したい
export const pickFixedNumsInSeparations = (
  patterns: NumSeparationPatterns[]
): { fixedSeparation: number[]; startIndex: number }[] => {
  // Row Column を入れ替え
  let sameIndexSeparations = patterns[0].map((col, i) =>
    patterns.map((row) => row[i])
  );

  // すべて同じ要素の separation を取り出す
  let fixedSeparations: { fixedSeparation: number[]; startIndex: number }[] =
    sameIndexSeparations
      .filter((indexedArea, i) => {
        const isFixed = indexedArea.every((e, j) => {
          if (j === 0) {
            return true;
          }

          return isEqual(sameIndexSeparations[i][j - 1], e);
        });

        if (isFixed) {
          return true;
        }

        return false;
      })
      .map((e) => ({
        fixedSeparation: e[0].numsInSeparation,
        startIndex: e[0].startIndex,
      }));

  return fixedSeparations;
};

// TODO まずはロジックを再利用するが、後で良い方法を考える
// fixedArea でそれぞれ埋める
export const updatedCellsByFixedArea = (
  separations: Separation[],
  fixedSeparations: { fixedSeparation: number[]; startIndex: number }[],
  currentCells: CellStatus[]
) => {
  const filledSeparations: {
    filledSeparation: CellStatus[];
    startIndex: number;
  }[] = fixedSeparations.map((e) => {
    const separatedArea = separations.find(
      (separation) => separation.startIndex === e.startIndex
    );

    if (!separatedArea) {
      return { filledSeparation: [], startIndex: e.startIndex };
    }

    return {
      filledSeparation: fillFromEdges(
        e.fixedSeparation,
        Array(separatedArea.separationsLength).fill(
          CellStatus.UNKNOWN
        ) as CellStatus[]
      ),
      startIndex: e.startIndex,
    };
  });

  // currentCellを更新する
  let _currentCells = [...currentCells];

  for (const e of filledSeparations) {
    // TODO
    _currentCells = _currentCells.map((currentCell, i) => {
      if (i >= e.startIndex && i < e.startIndex + e.filledSeparation.length) {
        // 結合して TRUE を優先する
        if (
          currentCell === CellStatus.TRUE ||
          e.filledSeparation[i - e.startIndex] === CellStatus.TRUE
        ) {
          return CellStatus.TRUE;
        }

        return e.filledSeparation[i - e.startIndex];
      }

      return currentCell;
    });
  }

  return _currentCells;
};
