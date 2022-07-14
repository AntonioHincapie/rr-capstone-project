import CrytoReducer from './GetCurrencyReducer';

describe('Fetch CryptoCurrency', () => {
  it('Initial State', () => {
    expect(CrytoReducer(undefined, {})).toEqual([]);
  });

  test('CryptoCurrency Data', () => {
    const GETCURRENCY = 'rr-capstone-project/GETCURRENCY';
    const reducer = CrytoReducer([], {
      type: GETCURRENCY,
      payload :[
        {
          change: 2.016432888978943,
          id: 'bitcoin',
          img: '/imgs/color/btc.png',
          name: 'Bitcoin',
          price: 19696.01622570775,
          rank: 1,
          symbol: 'BTC',
          volumen: 12105658446.107367,
        },
        {
          change: 3.628239615253024,
          id: 'ethereum',
          img: '/imgs/color/eth.png',
          name: 'Ethereum',
          price: 1080.3836933016412,
          rank: 2,
          symbol: 'ETH',
          volumen: 6827050407.118125,
        },
      ],
    });

    expect(reducer).toEqual([
      {
        change: 2.016432888978943,
        id: 'bitcoin',
        img: '/imgs/color/btc.png',
        name: 'Bitcoin',
        price: 19696.01622570775,
        rank: 1,
        symbol: 'BTC',
        volumen: 12105658446.107367,
      },
      {
        change: 3.628239615253024,
        id: 'ethereum',
        img: '/imgs/color/eth.png',
        name: 'Ethereum',
        price: 1080.3836933016412,
        rank: 2,
        symbol: 'ETH',
        volumen: 6827050407.118125,
      },
    ]);
  });
});
