import styleHeader from '../scss/header.module.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Header() {
    return (
      <div className={styleHeader.wrapper}>
        <div className={styleHeader.header}>
          <p className={ styleHeader.interpreter}>RU/$</p>
          <p className={ styleHeader.header_desc}>Накопительный счет</p>
          <Router>
            <nav className={ styleHeader.header_nav }>
                <ul className={ styleHeader.list }>
                    <li className={ styleHeader.item }><Link className={ styleHeader.link} to="#">Отзывы</Link></li>
                    <li><Link className={ styleHeader.link} to="#">Гарантии</Link></li>
                    <li><Link className={ styleHeader.link} to="#">Как купить</Link></li>
                    <li><Link className={ styleHeader.link} to="#">Накопительная</Link></li>
                    <li><Link className={ styleHeader.link} to="#">Заработай</Link></li>
                </ul>
            </nav>
          </Router>
          <p className={ styleHeader.profile }>Hanzed Rules</p>
        </div>
      </div>
    );
  }



export default Header;