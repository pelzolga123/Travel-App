const deals = (state = {}, action) => {
  switch (action.type) {
    case 'FETCH_DEALS':
      return action.deals;
    default:
      return state;
  }
};

export default deals;
