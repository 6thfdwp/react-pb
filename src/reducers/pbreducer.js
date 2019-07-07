/**
 * Custom reducer hook to manage powerball state related to fetching latest result
 * It can be hooked into any ui pieces to show primary and secondary numbers
 */
import { useState, useReducer } from 'react';

const initState = {
  pending: false,
  // initial primary number array (size 7) are all undefined
  data: { primaryNums: Array.from({ length: 7 }), secondaryNums: [undefined] },
  error: null
};
const reducerFn = (state, action) => {
  // console.log(action.type);

  if (action.type === 'CLEAR_PB_RESULT') {
    return { ...state, ...initState };
  }
  return { ...state, ...action.payload };
};

const usePBReducer = () => {
  return useReducer(reducerFn, initState);
};

export { usePBReducer };
