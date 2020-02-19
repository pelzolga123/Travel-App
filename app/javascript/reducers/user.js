const userReducer = (state = '', action) => {
  switch (action.type) {
    case 'GET_USER':
      return [
        ...state,
        action.payload,
      ];
    default:
      return state;
  }
};

export default userReducer;
