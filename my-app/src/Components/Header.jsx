import styleHeader from '../scss/header.module.scss';
import { Link } from 'react-router-dom';
import profileIcon from '../assets/header-icons/logo-header.svg';
import likeIcon from '../assets/header-icons/like-icons.svg';
import basketIcon from '../assets/header-icons/basket-icons.svg';


function Header() {
  return (
    <div className={styleHeader.container}>
      <div className={styleHeader.wrapper}>
        <div className={styleHeader.header}>
          <div className={styleHeader.header_top}>
            <p className={styleHeader.interpreter}>RU<span>/</span>$</p>
            <p className={styleHeader.header_desc}>Накопительный счет</p>
            <nav className={styleHeader.header_nav}>
              <ul className={styleHeader.list}>
                <li className={styleHeader.item}><Link className={styleHeader.link} to="/">Отзывы</Link></li>
                <li><Link className={styleHeader.link} to="/">Гарантии</Link></li>
                <li><Link className={styleHeader.link} to="/basket">Как купить</Link></li>
                <li><Link className={styleHeader.link} to="/">Накопительная</Link></li>
                <li><Link className={styleHeader.link} to="/">Заработай</Link></li>
              </ul>
            </nav>
            <p className={styleHeader.profile}>Hanzed Rules</p>
          </div>
          <div className={styleHeader.header_bottom}>
            <div className={styleHeader.logo}>
              <img src={profileIcon} alt="logo" />
              <p className={styleHeader.logo_desc}>Playnchill</p>
            </div>
            <input className={styleHeader.input} placeholder='Поиск' type="text" />
            <p className={styleHeader.header_bottom_desc}>Бесплатно</p>
            <img src={likeIcon} alt="likeIcon" />
            <img src={basketIcon} alt="basket" />
          </div>
          <div className={styleHeader.header_line}></div>
        </div>
      </div>
    </div>
  );
}

export default Header;