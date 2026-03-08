import { useEffect, useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { CurrentUserContext } from "./context/CurrentUserContext.js"
import { getCurrentUserInfo } from "./managers/AuthManager.js"

export const Rare = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    getCurrentUserInfo().then(({status, response}) => {
      if (status === 200) {
        setUser(response)
      } else {
        setUser(null)
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
