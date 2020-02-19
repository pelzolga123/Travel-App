const getUser = user => ({
  type: 'GET_USER',
  payload: user,
});

export default { getUser };
