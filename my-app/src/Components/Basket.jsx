import styleBasket from '../scss/bascket.module.scss';
import { Link } from 'react-router-dom';


function Basket() {
    return (
        <div className='wrapper'>
            <h1 className={styleBasket.basket_title}>Корзина <span>5</span></h1>
            <div className={styleBasket.basket_box}>
                <div className={styleBasket.basket_box_left}>
                    <div className={styleBasket.basket_box_top}>
                        <h2 className={styleBasket.basket_box_title}>Войдите или зарегистрируйтесь</h2>
                        <p className={styleBasket.basket_box_desc}>Вы сможете накапливать бонусные рубли
                        и использовать их при оплате до 50% стоимости товаров.</p>
                        <button className={styleBasket.basket_box_btn}>Войти</button>
                    </div>
                </div>
                <div className={styleBasket.basket_box_rigth}>
                    <p className={styleBasket.desc_top_rigth}>5 товаров</p>
                    <p className={styleBasket.price_top_rigth}>4 999 Р</p>
                    <button className={styleBasket.btn_top_rigth}>Оформить заказ</button>
                    <p className={styleBasket.desc_bottom_rigth}>Покупая данный товар, я подтверждаю,что ознакомился и согласен с <Link className={styleBasket.link} to="/">условиями </Link> и <Link className={styleBasket.link} to="/">условия магазина</Link></p>
                </div>
            </div>
        </div>
    )
}

export default Basket;