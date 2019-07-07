/**
 * Expose api request methods related to powerball
 *
 */
import axios from 'axios';

const url = 'https://data.api.thelott.com/sales/vmax/web/data/lotto/latestresults';
const postBody = {
  CompanyId: 'GoldenCasket',
  MaxDrawCountPerProduct: 1,
  OptionalProductFilter: ['Powerball']
};

const fetchLatestDraw = async dispatch => {
  dispatch({ type: 'FETCH_LATEST_PB_PENDING', payload: { pending: true, error: null } });
  try {
    const resp = await axios.post(url, postBody);
    const result = resp.data.DrawResults[0];
    const { PrimaryNumbers: primaryNums, SecondaryNumbers: secondaryNums } = result;
    primaryNums.sort((a, b) => a - b);
    dispatch({
      type: 'FETCH_LATEST_PB_DONE',
      payload: {
        pending: false,
        data: { primaryNums, secondaryNums }
      }
    });
  } catch (err) {
    dispatch({ type: 'FETCH_LATEST_PB_ERROR', payload: { pending: true, error: null } });
  }
};

export { fetchLatestDraw };
