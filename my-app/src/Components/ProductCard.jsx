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
              <p className={styleProduct.product_price}>349 Р</p>
              <p className={styleProduct.product_price}>-25%</p>
              <p className={styleProduct.product_price}>599 Р</p>
            </div>
            <p className={styleProduct.product_price}>Регион активации  Россия и страны СНГ</p>
            <p className={styleProduct.product_price}>Сервис активации  Steam</p>
          </div>
          <div className={styleProduct.product_desc_rigth}>

          </div>
        </div>
      </div>
      <div className={styleProduct.product_line}></div>
    </div>
    );
}

export default ProductCard;