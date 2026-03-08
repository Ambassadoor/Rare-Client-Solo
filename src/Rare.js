import { useEffect, useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { CurrentUserContext } from "./context/CurrentUserContext.js"
import { getCurrentUserInfo } from "./managers/AuthManager.js"
import { useNavigate } from "react-router-dom"

export const Rare = () => {
  const [user, setUser] = useState(null)
  const hadSession = localStorage.getItem("has_session")

  const navigate = useNavigate()

  useEffect(() => {
    getCurrentUserInfo().then(({status, response}) => {
      if (status === 200) {
        localStorage.setItem("has_session", "true")
        setUser(response)
      } else {
        localStorage.removeItem("has_session")
        if (!hadSession) return
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
