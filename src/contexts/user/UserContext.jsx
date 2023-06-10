import {createContext, useReducer} from 'react';
import {userReducer, userInitialState} from './UserReducer';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
  const [state, dispatch] = useReducer(userReducer, userInitialState);

  return (
    <UserContext.Provider value={{state, dispatch}}>
      {children}
    </UserContext.Provider>
  );
};
