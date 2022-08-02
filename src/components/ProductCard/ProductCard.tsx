import { useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import {
  addToCart,
  removeFromCart,
  updateFavourites,
} from '../../features/products/productsSlice';
import { Product } from '../../features/products/types';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import Toast from '../ui/toast';

type Props = { data: Product };

const CART_MAX = 20;

const ProductCard = ({ data }: Props) => {
  const {
    id,
    name,
    brand,
    color,
    price,
    amount,
    favourite: isFav,
    onlyNew,
  } = data;
  const cart = useAppSelector((state) => state.products.cart);
  const amountInCart = cart.filter((el) => el === id).length;

  const dispatch = useAppDispatch();

  const handleFavouritesClick = () => {
    dispatch(updateFavourites(id));
  };

  const [toast, setToast] = useState(false);

  const handleCartAddClick = () => {
    if (cart.length === CART_MAX) {
      setToast(true);
      setTimeout(() => setToast(false), 1000);
      return;
    }
    dispatch(addToCart(id));
  };

  const handleCartRemoveClick = () => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="product-board__item product-card">
      <picture className="product-card__picture">
        <img src={`./images/${id}.jpg`} alt={name} title={name} />
      </picture>

      <div className="product-card__btn-container btn-container">
        <SwitchTransition>
          <CSSTransition
            key={String(!amountInCart)}
            timeout={300}
            classNames="fade"
          >
            <div className="fade product-card__cart btn-container">
              {!amountInCart ? (
                <button
                  className="product-card__btn product-card__btn--plus icon-plus"
                  onClick={handleCartAddClick}
                ></button>
              ) : (
                <>
                  <button
                    className="product-card__btn product-card__btn--plus icon-plus"
                    onClick={handleCartAddClick}
                  ></button>
                  <span className="product-card__amount">{amountInCart}</span>
                  <button
                    className="product-card__btn product-card__btn--minus icon-minus"
                    onClick={handleCartRemoveClick}
                  ></button>
                </>
              )}
            </div>
          </CSSTransition>
        </SwitchTransition>

        <Toast show={toast} />

        <button
          className="product-card__btn product-card__btn--fav icon-heart"
          onClick={handleFavouritesClick}
          style={isFav ? { color: 'hotpink' } : {}}
        ></button>
      </div>

      <div className="product-card__info">
        <div className="product-card__brand">
          {onlyNew && <span style={{ color: 'hotpink' }}>NEW</span>} {brand}
        </div>
        <div className="product-card__name">{name}</div>
        <div className="product-card__color">{color}</div>
        <div className="product-card__footer">
          <div className="product-card__price">$ {price}</div>
          <div>Available: {amount}</div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
