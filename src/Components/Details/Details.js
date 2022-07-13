import { NavLink, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import closeArrow from '../imgs/back-arrow.png';
import './Details.css';

export default function Details() {
  const { id } = useParams();
  const cryptos = useSelector((state) => state.cryptos);
  const PrintCrypto = cryptos.filter((element) => element.id === id);
  const Crypto = PrintCrypto[0];

  if (PrintCrypto !== undefined) {
    return (
      <div className="containerDetails">
        <NavLink to="/">
          <img src={closeArrow} alt="Back" />
        </NavLink>
        <div
          className="containerCrypto"
          id={id}
        >
          <img src={Crypto.img} alt={Crypto.name} />
          <h3>
            Rank #
            {Crypto.rank}
          </h3>
          <h4>
            {Crypto.name}
            {Crypto.symbol}
          </h4>
          <p className="volumen">
            Quantity of trading volume repr0esented in USD over the last 24 hours:
            ${Crypto.volumen.toFixed(2)}
          </p>
          <p className="price">
            Volume-Weighted price based on real-time market data, translated to USD:
            ${Crypto.price.toFixed(2)}
          </p>
          <p className="change">
            The direction and value change in the last 24 hours:
            ${Crypto.change.toFixed(2)}
          </p>
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
  );
}
