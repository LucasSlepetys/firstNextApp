import Link from 'next/link';
import React from 'react';
import { SortBy, SortOrderBy } from './type_interface';

interface Props {
  sortBy: SortBy;
  sortOrderBy: SortOrderBy;
}

export function SortOptions({ sortBy, sortOrderBy }: Props) {
  return (
    <div className='flex flex-col justify-center items-center gap-2'>
      <div className='tabs tabs-boxed w-72 flex'>
        <Link
          href={`/users?sortBy=name&sortOrderBy=${sortOrderBy}`}
          className={`tab text-primary flex-1 ${
            sortBy === 'name' ? 'tab-active' : ''
          }`}
        >
          Name
        </Link>
        <Link
          href={`/users?sortBy=username&sortOrderBy=${sortOrderBy}`}
          className={`tab text-primary flex-1 ${
            sortBy === 'username' ? 'tab-active' : ''
          }`}
        >
          User Name
        </Link>
      </div>
      <div className='tabs tabs-boxed w-72 flex'>
        <Link
          href={`/users?sortBy=${sortBy}&sortOrderBy=asc`}
          className={`tab text-primary flex-1 ${
            sortOrderBy === 'asc' ? 'tab-active' : ''
          }`}
        >
          asc
        </Link>
        <Link
          href={`/users?sortBy=${sortBy}&sortOrderBy=desc`}
          className={`tab text-primary flex-1 ${
            sortOrderBy === 'desc' ? 'tab-active' : ''
          }`}
        >
          desc
        </Link>
      </div>
    </div>
  );
}
