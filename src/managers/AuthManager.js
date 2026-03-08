import { normalize } from "../components/utils/normalize.js"

export const loginUser = (user) => {
  return fetch("/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      username: user.username,
      password: user.password
    })
  }).then(normalize)
}

export const registerUser = (newUser) => {
  return fetch("/api/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(newUser)
  }).then(normalize)
}

export const logoutUser = () => {
  return fetch("/api/logout", {
    method: "DELETE",
    credentials: "include",
    headers: {
      "Accept": "application/json"
    }
  }).then(normalize)
}

export const getCurrentUserInfo = () => {
  return fetch("/api/me", {
    credentials: "include",
    headers: {
      "Accept" : "application/json"
    }
  }).then(normalize)
}