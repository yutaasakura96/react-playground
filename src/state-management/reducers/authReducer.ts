interface LoginAction {
  type: 'LOGIN';
  user: string;
}
interface LogoutAction {
  type: 'LOGOUT';
}

export type AuthAction = LoginAction | LogoutAction;

const authReducer = (state: string, action: AuthAction): string => {
  if (action.type === 'LOGIN') return action.user;
  if (action.type === 'LOGOUT') return '';
  return state;
};

export default authReducer;
