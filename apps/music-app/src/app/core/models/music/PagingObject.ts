export interface PagingObject<T> {
  href: string;
  items: T[];
  limit: number;
  next?: any;
  offset: number;
  previous?: any;
  total: number;
}
