import React from 'react'
import axios from "../utils/axios"
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Logout = () => {
    const navigate = useNavigate()
    const handleClick = async() => {
    try {
        const res = await axios.post("/logout");
        localStorage.removeItem("token");
        window.dispatchEvent(new Event("authChange"));
        toast.success(res.data.message || "logout successfull", { autoClose: 1000})
        navigate("/login", {replace: true})
    } catch (err) {
      toast.error(err.response?.data?.message || "logout failed", {autoClose: 1000})
    }
    }
  return (
     <button onClick={handleClick} className='btn '>Logout</button>
  )
}

export default Logout
