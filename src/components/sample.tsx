import React, { memo, VFC } from "react";
import Crossword from "@jaredreisinger/react-crossword";

// eslint-disable-next-line react/display-name
export const Sample: VFC = memo(() => {
  const data = {
    across: {
      1: {
        clue: "1 + 1 =",
        answer: "TWO",
        row: 0,
        col: 0,
      },
    },
    down: {
      2: {
        clue: "2 - 1 =",
        answer: "ONE",
        row: 0,
        col: 2,
      },
    },
  };

  return (
    <div style={{ width: "80%" }}>
      <Crossword data={data} />
    </div>
  );
});
