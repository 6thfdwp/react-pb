import React from 'react';

/**
 * @param {Object} props
 * num: int
 * selected: boolean
 */
export default function NumberSquare({ num, selected }) {
  console.log(`[NumberSquare] rendering`);
  const cssName = selected ? 'num-square selected' : 'num-square';
  return (
    <div className={cssName}>
      <span className="num">{num}</span>
    </div>
  );
}
