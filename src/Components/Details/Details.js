import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Details() {
  const { id } = useParams();
  const cryptos = useSelector((state) => state.cryptos);
  const PrintCrypto = cryptos.filter((element) => element.id === id);
  const Crypto = PrintCrypto[0];

  if (PrintCrypto !== undefined) {
    return (
      <div>
        <NavLink to="/">
          <button type="button">Adios</button>
        </NavLink>
        <div
          className="containerCrypto"
          id={id}
        > 
          <h3>Rank #{Crypto.rank}</h3>
          <h4>{Crypto.name} {Crypto.symbol}</h4>
          <img src={Crypto.img} alt={Crypto.name} />
          <p className="volumen">Quantity of trading volume represented in USD over the last 24 hours ${Crypto.volumen.toFixed(2)}</p>
          <p className="price">Volume-Weighted price based on real-time market data, translated to USD ${Crypto.price.toFixed(2)}</p>
          <p className="change">The direction and value change in the last 24 hours ${Crypto.change.toFixed(2)}</p>
        </div>
      </div>
    );
  }
  return (
    <div>
        <NavLink to="/">
          <button type="button">Adios</button>
        </NavLink>
        <div>
          <h4>Please try again</h4>
        </div>
      </div>
  )
};
