import { CellStatus } from "./type";

export const printAnswer = (answer: CellStatus[][]) => {
  const converted = answer.map((row) =>
    row.map((cell) => {
      switch (cell) {
        case CellStatus.TRUE:
          return "確";
        case CellStatus.FALSE:
          return "一";
        case CellStatus.UNKNOWN:
          return "・";

        default:
          return "";
      }
    })
  );

  const stringified = `| ${converted
    .map((row) => row.join(""))
    .join(" |\n| ")} |`;

  console.log(stringified);
};
