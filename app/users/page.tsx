import { SortOptions } from './SortOptions';
import { UsersTable } from './UsersTable';
import React, { Suspense } from 'react';
import { SortBy, SortOrderBy } from './type_interface';

interface Props {
  searchParams: {
    sortBy: SortBy;
    sortOrderBy: SortOrderBy;
  };
}

const UsersPage = ({
  searchParams: { sortBy = 'name', sortOrderBy = 'asc' },
}: Props) => {
  return (
    <>
      <h1 className='text-xl'>All users: </h1>
      <h2>Sort by:</h2>
      <SortOptions sortBy={sortBy} sortOrderBy={sortOrderBy} />
      <Suspense
        fallback={<span className='loading loading-ball loading-lg'></span>}
      >
        <UsersTable sortBy={sortBy} sortOrderBy={sortOrderBy} />
      </Suspense>
    </>
  );
};

export default UsersPage;
