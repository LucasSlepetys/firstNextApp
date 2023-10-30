export type SortBy = 'name' | 'username';
export type SortOrderBy = 'desc' | 'asc';

export interface User {
  id: number;
  name: string;
  username: string;
}

export interface Props {
  searchParams: {
    sortBy: SortBy;
    sortOrderBy: SortOrderBy;
  };
}