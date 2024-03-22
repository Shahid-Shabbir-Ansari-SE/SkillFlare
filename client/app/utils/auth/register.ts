import axios from 'axios'
import { userRegister } from '../../types/auth'

export const register = async (user: userRegister) => {
  const res = await axios.post(
    `http://localhost:6060/api/auth/register`,
    user,
    {
      withCredentials: true,
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
  return res.data
}
