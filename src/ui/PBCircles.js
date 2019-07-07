import React from 'react';

/**
 * num: int or undefined if no result fetched or get cleared
 * secondary: boolean
 */
function PBCircle({ num, secondary }) {
  const cssName = ['pb-circle'];
  if (secondary) {
    cssName.push('secondary');
  }
  if (num !== undefined) {
    cssName.push('filled');
  }

  if (num === undefined && secondary) {
    num = 'PB';
  }
  return <div className={cssName.join(' ')}>{num}</div>;
}

/**
 * onFill:  func
 * onClear: func
 * primaryNums: array of int
 * secondaryNums: array of int
 */
export default function PBCircles({ onFill, onClear, primaryNums, secondaryNums }) {
  return (
    <div className="pb-row">
      {Array.from({ length: 7 }, (v, i) => i + 1).map((num, i) => (
        <PBCircle key={i} num={primaryNums[i]} />
      ))}
      <PBCircle num={secondaryNums[0]} secondary={true} />

      <button className="pb-circle pb-btn draw" onClick={onFill}>
        <i className="fa fa-bolt" />
      </button>
      <button className="pb-circle pb-btn clear" onClick={onClear}>
        <i className="fa fa-trash" />
      </button>
    </div>
  );
}
