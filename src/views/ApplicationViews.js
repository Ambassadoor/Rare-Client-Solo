import { Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"

export const ApplicationViews = ({loading}) => {
  return <>
    <Routes>
      <Route path="/login" element={<Login/>}  />
      <Route path="/register" element={<Register/>}  />
      <Route element={<Authorized loading={loading} />}>
        {/* Add Routes here */}
        <Route path="/" element={<>Coming Soon</>} />
        
      </Route>
    </Routes>
  </>
}
