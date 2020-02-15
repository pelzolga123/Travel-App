const dealReducer = (state = '', action) => {
  switch (action.type) {
    case 'BOOK_DEAL':
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default dealReducer;
