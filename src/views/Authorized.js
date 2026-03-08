import { Navigate, Outlet } from "react-router-dom"
import { useCurrentUser } from "../context/CurrentUserContext.js"

export const Authorized = ({loading}) => {
  const {user} = useCurrentUser()

  if (loading) return <>Loading</>
  
  if (user) {
    console.log(user)
    return <Outlet />
  }
  console.log(user)
  return <Navigate to='/login' replace />
}
