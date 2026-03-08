import { useEffect, useState } from "react"
import { ApplicationViews } from "./views/ApplicationViews"
import { NavBar } from "./components/nav/NavBar"
import { CurrentUserContext } from "./context/CurrentUserContext.js"
import { getCurrentUserInfo } from "./managers/AuthManager.js"
import { useNavigate } from "react-router-dom"

export const Rare = () => {
  const [user, setUser] = useState()
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  useEffect(() => {
    getCurrentUserInfo().then(({status, response}) => {
      if (status === 200) {
        setUser(response)
      } else {
        if (response.error === "no_token") {
          setUser(null)
          return
        }
        setUser(null)
        navigate("/login", {state: response.message})
      }
    })
    .finally(() => setLoading(false))
  },[])

  return (
  <CurrentUserContext.Provider value={{user, setUser}}>
    <NavBar />
    <ApplicationViews loading={loading} />
  </CurrentUserContext.Provider>
  )
}
