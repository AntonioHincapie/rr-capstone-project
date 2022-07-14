const URL = 'https://api.coincap.io/v2/assets';
const GETCURRENCY = 'rr-capstone-project/GETCURRENCY';

const CrytoReducer = (state = [], action) => {
  switch (action.type) {
    case GETCURRENCY:
      return [...action.payload];
    default:
      return state;
  }
};

const GetCrypto = (cryptos) => ({
  type: GETCURRENCY,
  payload: cryptos,
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
          img: `/imgs/color/${element.symbol.toLowerCase()}.png`,
          id: element.id,
          rank: Number(element.rank),
          symbol: element.symbol,
          name: element.name,
          volumen: Number(element.volumeUsd24Hr),
          price: Number(element.priceUsd),
          change: Number(element.changePercent24Hr),
        });
      });
      dispatch(GetCrypto(List));
    });
};

export default CrytoReducer;
