import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: {
    id: number;
  };
}

const UserPage = ({ params: { id } }: Props) => {
  if (id > 10) notFound();
  return <div>Page id: {id}</div>;
};

export default UserPage;
