import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
}

const usePosts = (query: PostQuery) => {
  return useInfiniteQuery<Post[], Error>({
    queryKey: ['posts', query],
    queryFn: ({ pageParam = 1 }) => axios.get('https://jsonplaceholder.typicode.com/posts',
      { params: {
        _start: (pageParam as number - 1) * query.pageSize,
        _limit: query.pageSize,
       } }).
      then((res) => res.data),
    staleTime: 1 * 60 * 1000, // 1 minute
    placeholderData: keepPreviousData,
    getNextPageParam: (lastPage, allPages) => { return lastPage.length > 0 ? allPages.length + 1 : undefined; },
    initialPageParam: 1,
  });
};

export default usePosts;
