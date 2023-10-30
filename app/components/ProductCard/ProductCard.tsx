import { ButtonLog } from '../ButtonLog';
import React from 'react';
import styles from './ProductCard.module.css';

const ProductCard = () => {
  return (
    <div className={styles.card}>
      <ButtonLog />
    </div>
  );
};

export default ProductCard;
