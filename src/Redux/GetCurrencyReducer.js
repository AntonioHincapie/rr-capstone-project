const URL = 'https://api.coincap.io/v2/assets';
const GETCURRENCY = 'rr-capstone-project/GETCURRENCY';

const CrytoReducer = (state = [], action) => {
  switch (action.type) {
    case GETCURRENCY:
      return [...action.cryptos];
    default:
      return state;
  }
}

const GetCrypto = (cryptos) => ({
  type: GETCURRENCY,
  cryptos,
});

export const FetchCryptos = () => (dispatch) => {
  const List = [];
  fetch(URL, {
    headers: {
      'Content-Type': 'application/json',
      accept: 'application/json',
    },

  })
    .then((response) => response.json())
    .then((result) => {
      result.data.forEach((element) => {
        List.push({
          img: `/imgs/${element.symbol}.png`,
          id: element.id,
          rank: element.rank,
          name: element.name,
        });
      });
      dispatch(GetCrypto(List));
    });
  console.log(List);
};

export default CrytoReducer;
