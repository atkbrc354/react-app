import styleBasket from '../scss/bascket.module.scss';


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

                </div>
            </div>
        </div>
    )
}

export default Basket;