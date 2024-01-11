import styleHeader from '../scss/header.module.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';


function Header() {
    return (
      <div className={styleHeader.header}>
        <Router>
          <nav>
              <ul className={ styleHeader.list }>
                  <li className={ styleHeader.item }><Link className={ styleHeader.link} to="#">Отзывы</Link></li>
                  <li><Link className={ styleHeader.link} to="#">Гарантии</Link></li>
                  <li><Link className={ styleHeader.link} to="#">Как купить</Link></li>
                  <li><Link className={ styleHeader.link} to="#">Накопительная</Link></li>
                  <li><Link className={ styleHeader.link} to="#">Заработай</Link></li>
              </ul>
          </nav>
        </Router>
      </div>
    );
  }



export default Header;