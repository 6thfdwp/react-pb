import React from 'react';

import NumberSquare from './NumberSquare';

export default function SecondaryGrid({ seq, secondaryNums }) {
  const squares = Array.from({ length: seq }, (v, i) => i + 1).map((num, i) => {
    const selected = secondaryNums.indexOf(num) !== -1;
    return <NumberSquare key={num} num={num} selected={selected} />;
  });

  return <div className="draw-grid">{squares}</div>;
}
