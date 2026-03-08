import { useEffect, useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { CurrentUserContext } from "./context/CurrentUserContext.js"
import { getCurrentUserInfo } from "./managers/AuthManager.js"
import { useNavigate } from "react-router-dom"

export const Rare = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    getCurrentUserInfo().then(({status, response}) => {
      if (status === 200) {
        setUser(response)
      } else {
        if (!user) return
        setUser(null)
        navigate("/login", {state: "Session expired, please login again"})
      }
    })
  },[])

  return (
  <CurrentUserContext.Provider value={{user, setUser}}>
    <NavBar />
    <ApplicationViews />
  </CurrentUserContext.Provider>
  )
}
