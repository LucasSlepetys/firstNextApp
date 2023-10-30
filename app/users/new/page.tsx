'use client';
import { useRouter } from 'next/navigation';
import React from 'react';

const NewUserPage = () => {
  const router = useRouter();

  return (
    <div>
      <button
        onClick={() => {
          router.push('/users');
        }}
        type='button'
        className='btn btn-primary'
      >
        Create & Back to users page
      </button>
    </div>
  );
};

export default NewUserPage;
