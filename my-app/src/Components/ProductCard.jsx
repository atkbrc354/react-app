import styleProduct from '../scss/product-card.module.scss';
import productCard from '../assets/image/product-card.jpg';

function ProductCard() {
  return (
    <div className={styleProduct.product_cards}>
      <div className={styleProduct.product_line}></div>
      <div className={styleProduct.product_box}>
        <img className={styleProduct.image_card} src={productCard} alt="product-card" />
        <div className={styleProduct.product_desc_block}>
          <div className={styleProduct.product_desc_left}>
            <h3 className={styleProduct.product_title}>Minecraft</h3>
            <div className={styleProduct.product_price_block}>
              <p className={styleProduct.currentPrice}>349 Р</p>
              <p className={styleProduct.discountLabel}>-25%</p>
              <p className={styleProduct.originalPrice}>599 Р</p>
            </div>
            <div className={styleProduct.productDescBlock}>
              <p className={styleProduct.product_desc}><span>Регион активации </span> Россия и страны СНГ</p>
              <p className={styleProduct.product_desc}><span>Сервис активации </span> Steam</p>
            </div>
          </div>
          <div className={styleProduct.product_desc_rigth}>
          <svg className={styleProduct.cross} xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.58377 6.99662L0 12.583L1.41388 13.9976L6.99765 8.41117L12.5814 13.9976L13.9953 12.583L8.41153 6.99662L13.9917 1.41382L12.5778 -0.000732422L6.99765 5.58207L1.41748 -0.000730515L0.00360322 1.41382L5.58377 6.99662Z" fill="white" fill-opacity="0.2"/>
          </svg>
            <div className={styleProduct.basketCounter}>
              <span className={styleProduct.counterMinus}>-</span>
              <span className={styleProduct.counter}>1</span>
              <span className={styleProduct.counterPlus}>+</span>
            </div>
            <svg className={styleProduct.likeBascet} xmlns="http://www.w3.org/2000/svg" width="26" height="21" viewBox="0 0 26 21" fill="none">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.17875 2.47059C4.48377 2.47059 2.47619 4.45541 2.47619 6.69457C2.47619 7.78053 2.9447 8.84477 3.81685 9.64625L13 18.0853L22.1831 9.64625C23.0553 8.84478 23.5238 7.78053 23.5238 6.69457C23.5238 4.45541 21.5162 2.47059 18.8212 2.47059C17.5427 2.47059 16.3349 2.93827 15.4593 3.74289L13.8388 5.23214C13.3648 5.66772 12.6352 5.66772 12.1612 5.23214L10.5407 3.7429C9.66509 2.93828 8.45731 2.47059 7.17875 2.47059ZM0 6.69457C0 2.90358 3.31187 0 7.17875 0C9.05132 0 10.8656 0.682659 12.2182 1.92567L13 2.6441L13.7818 1.92566C15.1344 0.682658 16.9487 0 18.8212 0C22.6881 0 26 2.90358 26 6.69457C26 8.5044 25.2167 10.2173 23.8607 11.4635L13.8388 20.6733C13.3648 21.1089 12.6352 21.1089 12.1612 20.6733L2.13929 11.4635C0.783262 10.2173 0 8.5044 0 6.69457Z" fill="#1E1C27"/>
            </svg>
          </div>
        </div>
      </div>
      <div className={styleProduct.product_line}></div>
    </div>
    );
}

export default ProductCard;