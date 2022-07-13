import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FetchCryptos } from '../../Redux/GetCurrencyReducer';
import './HomePage.css';

const Crypto = (props) => {
  const {
    id, img, name, rank,
  } = props;

  return (
    <li>
      <NavLink to={`/${id}`}>
        <div className="cryptoList">
          <img src={img} alt={name} />
          <h4>
            #
            {rank}
            {name}
          </h4>
        </div>
      </NavLink>
    </li>
  );
};

export default function HomePage() {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();
  const [filterCrypto, setFilter] = useState([]);

  if (cryptos.length === 0) {
    dispatch(FetchCryptos());
  }

  const filterHandler = (e) => {
    if (e.target.value === '10') {
      setFilter(cryptos.filter((cryp) => cryp.rank <= 10));
    } else if (e.target.value === '20') {
      setFilter(cryptos.filter((cryp) => cryp.rank <= 20 && cryp.rank >= 11));
    } else if (e.target.value === '30') {
      setFilter(cryptos.filter((cryp) => cryp.rank <= 30 && cryp.rank >= 21));
    } else if (e.target.value === '40') {
      setFilter(cryptos.filter((cryp) => cryp.rank <= 40 && cryp.rank >= 31));
    } else if (e.target.value === '50') {
      setFilter(cryptos.filter((cryp) => cryp.rank <= 50 && cryp.rank >= 41));
    } else if (e.target.value === '60') {
      setFilter(cryptos.filter((cryp) => cryp.rank <= 60 && cryp.rank >= 51));
    } else if (e.target.value === '70') {
      setFilter(cryptos.filter((cryp) => cryp.rank <= 70 && cryp.rank >= 61));
    } else if (e.target.value === '80') {
      setFilter(cryptos.filter((cryp) => cryp.rank <= 80 && cryp.rank >= 71));
    } else if (e.target.value === '90') {
      setFilter(cryptos.filter((cryp) => cryp.rank <= 90 && cryp.rank >= 81));
    } else if (e.target.value === '100') {
      setFilter(cryptos.filter((cryp) => cryp.rank <= 100 && cryp.rank >= 91));
    } else {
      setFilter(cryptos);
    }
  };

  return (
    <div className="container">
      <div className="selector">
        <select name="filter" id="filter" onInput={(e) => filterHandler(e)}>
          <option defaultValue="All">All</option>
          <option value="10">1 to 10</option>
          <option value="20">11 to 20</option>
          <option value="30">21 to 30</option>
          <option value="40">31 to 40</option>
          <option value="50">41 to 50</option>
          <option value="60">51 to 60</option>
          <option value="70">61 to 70</option>
          <option value="80">71 to 80</option>
          <option value="90">81 to 90</option>
          <option value="100">91 to 100</option>
        </select>
      </div>
      <ul className="cryptos">
        {filterCrypto.length > 0
        && filterCrypto.map((crypto) => (
          <Crypto
            key={crypto.id}
            id={crypto.id}
            name={crypto.name}
            img={crypto.img}
            rank={crypto.rank}
          />
        ))}
        {filterCrypto.length === 0
        && cryptos.map((crypto) => (
          <Crypto
            key={crypto.id}
            id={crypto.id}
            name={crypto.name}
            img={crypto.img}
            rank={crypto.rank}
          />
        ))}
      </ul>
    </div>
  );
}

Crypto.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  rank: PropTypes.number.isRequired,
};
