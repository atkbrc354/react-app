import styleHeader from '../scss/header.module.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Header() {
    return (
      <div className={styleHeader.wrapper}>
        <div className={styleHeader.header}>
          <div className={styleHeader.header_top}>
            <p className={styleHeader.interpreter}>RU<span>/</span>$</p>
            <p className={styleHeader.header_desc}>Накопительный счет</p>
            <Router>
              <nav className={ styleHeader.header_nav}>
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
          <div className={styleHeader.header_bottom}>
            <div className={styleHeader.logo}>
              <img src="../public/image/logo-header.svg'" alt="logo" />
              <p>Playnchill</p>
            </div>
          </div>
        </div>
      </div>
    );
  }



export default Header;