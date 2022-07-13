import logo from '../imgs/coincap-logo.png';
import './Header.css';

export default function Header() {
  return (
    <div className="Header">
      <h3>CryptoCurrency Info</h3>
      <p>
        Built with
        <img src={logo} alt="coincap" />
        API and Cryptocurrency-Icons
      </p>
    </div>
  );
}
