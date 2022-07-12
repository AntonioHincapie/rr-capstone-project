import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FetchCryptos } from '../../Redux/GetCurrencyReducer';

const Crypto = (props) => {
  const {
    id, img, name,
  } = props;

  return (
    <li>
      <NavLink to={`/${id}`}>
        <div>
          <img src={img} alt={name} />
          <h4>{name}</h4>
        </div>
      </NavLink>
    </li>
  );
};

export default function HomePage() {
  const cryptos = useSelector((state) => state.cryptos);
  const dispatch = useDispatch();

  if (cryptos.length === 0) {
    dispatch(FetchCryptos());
  }

  return (
    <div className="container">
      <ul className="cryptos">
        {
          cryptos.map((crypto) => (
            <Crypto
              key={crypto.id}
              id={crypto.id}
              name={crypto.name}
              img={crypto.img}
            />
          ))
        }
      </ul>
    </div>
  );
};

Crypto.propTypes = {
  id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
