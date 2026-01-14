import { useEffect, useState } from 'react';
import { CanceledError } from '../services/api-clients';
import userService, { type User } from '../services/user-service';

const useUsers = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsLoading(true);
    const { request, cancel } = userService.getAll<User>();
    request
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
        setIsLoading(false);
      });
    return () => cancel();
  }, []);
  return { users, error, isLoading, setError, setUsers, setIsLoading };
};

export default useUsers;
