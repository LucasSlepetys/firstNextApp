'use client';
import React from 'react';
export function ButtonLog({}) {
  return (
    <button
      onClick={() => {
        console.log('hi');
      }}
    >
      Click me
    </button>
  );
}
