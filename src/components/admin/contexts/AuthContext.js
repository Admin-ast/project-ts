import { useState, useContext, createContext } from "react";

import { getToken, login } from "../../../utils/handleToken";
import { parseJwt } from "../../../utils/parseJWT";

import { postFetcher } from "../../../service/index";
import { useEffect } from "react";

const AuthContext = createContext({})

export function AuthProvider({ children }){
  const [ isAuthenticated, setIsAuthenticated ] = useState({})
  const [ myId, setMyId ] = useState('')

  useEffect(() => {
    const myToken = getToken()
    if(myToken){
      setIsAuthenticated(true)
      setMyId(parseJwt(myToken).id)
    }
  },[])

  async function SignIn(email, password){
    const { data } = await postFetcher('/users/authenticate', 
      { email, password })
    
    login(data.token)
    setMyId(parseJwt(data.token).id)

    setIsAuthenticated(true)

    api.interceptors.request.use(config => {
      if(!config.headers.Authorization){
        config.headers.Authorization = `Bearer ${data.token}`
      }
      return config
    })

    return data
  }
  async function SignUp(name, email, password){
    const { data } = await postFetcher('/users/register', 
      { name, email, password })
    
    login(data.token)
    setIsAuthenticated(true)

    api.interceptors.request.use(config => {
      config.headers.authorization = `Bearer ${data.token}`
      return config
    })

    return data
  }

  return(
    <AuthContext.Provider
      value={{
        SignIn,
        SignUp,
        isAuthenticated,
        myId
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(){
  return useContext(AuthContext)
}D