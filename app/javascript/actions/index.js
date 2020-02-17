const bookDeal = (deal) => ({
  type: 'BOOK_DEAL',
  payload: deal,
});

const fetchDeals = (deals) => ({
  type: 'FETCH_DEALS',
  payload: deals,
});

export { bookDeal, fetchDeals };
