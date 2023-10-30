import React from 'react';

interface Props {
  params: {
    productType: string[];
  };
}

const ProductPage = ({ params: { productType } }: Props) => {
  return (
    <>
      <h1>Product Page</h1>{' '}
      {productType?.map((type) => {
        return <p key={type}>{type}</p>;
      })}
    </>
  );
};

export default ProductPage;
