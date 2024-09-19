import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { plural, priceFormat } from '../../utils';
import './style.css';

function Item({item, onAddProduct = () => {}}) {

  const callbacks = {
    onAddProduct: () => {
      onAddProduct(item.code);
    },
  };

  return (
    <div className='Item'>
      <div className="Item-Code">{item.code}</div>
      <div className="Item-Title">{item.title}</div>
      <div className="Item-Price">{priceFormat(item.price)} ₽</div>
      <div className="Item-Actions">
        <button onClick={callbacks.onAddProduct}>Добавить</button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number,
  }).isRequired,
  onAddProduct: PropTypes.func,
};

export default React.memo(Item);
