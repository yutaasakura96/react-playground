import { createContext, type Dispatch } from 'react';
import type { AuthAction } from '../reducers/authReducer';

interface AuthContextType {
  user: string;
  dispatch: Dispatch<AuthAction>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export default AuthContext;
