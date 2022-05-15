import React, { memo, VFC } from "react";
//英語
// import Crossword from "@jaredreisinger/react-crossword"; 
//日本語
import Crossword from '@naari3/react-crossword-ja';

// eslint-disable-next-line react/display-name
export const Sample: VFC = memo(() => {
  const data = {
    across: {
      1: {
        clue: "1 + 1 =",
        answer: "ふたつ",
        row: 0,
        col: 0,
      },
    },
    down: {
      2: {
        clue: "2 - 1 =",
        answer: "ひとつ",
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
