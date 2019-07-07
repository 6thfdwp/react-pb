import React from 'react';

function PBCircle({ num, secondary }) {
  const cssName = ['pb-circle'];
  if (num !== undefined) {
    if (secondary) cssName.push('secondary-filled');
    else cssName.push('filled');
  }

  return <div className={cssName.join(' ')}>{num}</div>;
}

export default function PBCircles({ onFill, onClear, primaryNums, secondaryNums }) {
  return (
    <div className="pb-row">
      {Array.from({ length: 7 }, (v, i) => i + 1).map((num, i) => (
        <PBCircle key={i} num={primaryNums[i]} />
      ))}
      <PBCircle num={secondaryNums[0]} secondary={true} />

      <button className="pb-btn draw" onClick={onFill}>
        <i className="fa fa-bolt" />
      </button>
      <button className="pb-btn clear" style={{}} onClick={onClear}>
        <i className="fa fa-trash" />
      </button>
    </div>
  );
}
