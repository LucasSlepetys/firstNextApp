'use client';
import React from 'react';
import { CldUploadWidget } from 'next-cloudinary';

const UploadPage = () => {
  return (
    <div>
      <CldUploadWidget uploadPreset='ykefwmpe'>
        {({ open }) => (
          <button onClick={() => open()} className='btn btn-primary'>
            upload
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default UploadPage;
