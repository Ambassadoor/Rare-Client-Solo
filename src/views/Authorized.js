import { Navigate, Outlet } from "react-router-dom"
import { useCurrentUser } from "../context/CurrentUserContext.js"

export const Authorized = () => {
  const {user} = useCurrentUser()

  if (user) {
    return <Outlet />
  }
  return <Navigate to='/login' replace />
}
