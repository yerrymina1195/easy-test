import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

const StateContext = createContext({
    currentUser: {},
    userToken: null,
    setCurrentUser: () => {},
    setUserToken: () => {},
  });

  export const ContextProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(() => JSON.parse(localStorage.getItem('user')) || null);
    const [userToken, _setUserToken] = useState(localStorage.getItem('TOKEN') || '');
    const [loading, setLoading] = useState(false);
  
    const setUserToken = (token,userr) => {
      if (token) {
        localStorage.setItem('TOKEN', token)
      } else {
        localStorage.removeItem('TOKEN')
      }
      _setUserToken(token);
      localStorage.setItem('user', JSON.stringify(userr)) 
    }
  
   
  
    return (
      <StateContext.Provider
        value={{
          currentUser,
          setCurrentUser,
          userToken,
          setUserToken,
          loading,
           setLoading
        }}
      >
        {children}
      </StateContext.Provider>
    );
  };
  
  export const useStateContext = () => useContext(StateContext);