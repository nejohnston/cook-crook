// ACTIONS
const GET_DIET_TAG = 'GET_DIET_TAG';

// ACTION CREATORS
// Actions are payloads of information that send data from your
// application to your store. They are the only source of information
// for the store. You send them to the store using store.dispatch().

export const getDietTags = tag => ({
  type: GET_DIET_TAG,
  payload: tag,
});

// REDUCER

export default (
  state = {
    dietTags: [],
  },
  action,
) => {
  switch (action.type) {
    case GET_DIET_TAG: {
      return { ...state, dietTags: action.payload };
    }
    default:
      return state;
  }
};
