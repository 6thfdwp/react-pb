import React, { useState, useReducer } from 'react';
import './App.css';

import PBCircles from './ui/PBCircles';
import PrimaryGrid from './ui/PrimaryGrid';
import SecondaryGrid from './ui/SecondaryGrid';

import { fetchLatestDraw } from './api/pb';
import { usePBReducer } from './reducers/pbreducer';

function Separator() {
  return (
    <div
      style={{
        backgroundColor: '#78909C',
        color: '#fff',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5,
        textAlign: 'center',
        textTransform: 'uppercase'
      }}>
      Select your Powerball
    </div>
  );
}

function App() {
  const [state, dispatch] = usePBReducer();
  const { primaryNums, secondaryNums } = state.data;
  // console.log(state);

  return (
    <div className="app">
      <PBCircles
        primaryNums={primaryNums}
        secondaryNums={secondaryNums}
        onFill={() => fetchLatestDraw(dispatch)}
        onClear={() => dispatch({ type: 'CLEAR_PB_RESULT' })}
      />
      <div className="grid-container">
        <PrimaryGrid seq={35} primaryNums={primaryNums} />

        <Separator />
        <SecondaryGrid seq={20} secondaryNums={secondaryNums} />
      </div>
    </div>
  );
}

export default App;
