import React from 'react';
import { sort } from 'fast-sort';
import { SortBy, SortOrderBy, User } from './type_interface';

interface Props {
  sortBy: SortBy;
  sortOrderBy: SortOrderBy;
}

export async function UsersTable({ sortBy, sortOrderBy }: Props) {
  const data = await fetch('https://jsonplaceholder.typicode.com/users', {
    cache: 'no-cache',
  });
  const users: User[] = await data.json();

  const sortedUsers =
    sortOrderBy === 'asc'
      ? sort(users).asc((u) => u[sortBy])
      : sort(users).desc((u) => u[sortBy]);

  return (
    <ul>
      {sortedUsers.map((user) => {
        return (
          <li key={user.id} className='m-4'>
            <p className='text-lg inline-block'>
              Name: <span className='font-bold'>{user.name}</span>
            </p>
            <div className='divider divider-horizontal inline-block'>|</div>
            <p className='text-lg inline-block'>
              Username: <span className='font-bold'>{user.username}</span>
            </p>
          </li>
        );
      })}
    </ul>
  );
}
