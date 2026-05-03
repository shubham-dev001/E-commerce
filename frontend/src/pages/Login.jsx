import React,{useState,useEffect} from 'react'
import axios from "../utils/axios"
import { useNavigate,Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Login = () => {
 const [formData, setFormData] = useState({
  email: "",
  password: "",
 })
  useEffect(() => {
    document.body.style.backgroundColor = "pink"; 

    return () => {
      document.body.style.backgroundColor = "white"; 
    };
  }, []);
  const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData({...formData,[e.target.id]: e.target.value})
  }

  const handleSubmit = async(e) => {
     e.preventDefault();
     try {
      const res = await axios.post("/login", formData);
      localStorage.setItem("token", res.data.token);
      window.dispatchEvent(new Event("authChange"))
      toast.success(res.data.message, { autoClose: 1000 });
      navigate("/")
     } catch (err) {
       toast.error(err.response?.data?.message || "login failed", { autoClose: 1000 });
     }
  }
    const setStyle = {
       backgroundColor: "skyblue",
       color: "black", 
       width: 300, 
       height: "auto", 
       marginBottom: 60,
    }
  return (
    <div>
      <div style={setStyle} className='container mt-5 card'>
        <form onSubmit={handleSubmit}>
          <h2 className='container mt-2' style={{ textAlign: "center" }}>Login</h2>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email </label>
            <input type="email"
              className="form-control"
              id="email"
              onChange={handleChange}
              value={formData.email}
              placeholder='email'
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input type="password"
              className="form-control"
              id="password"
              onChange={handleChange}
              value={formData.password}
              placeholder='password'
              required
            />
          </div>
          <button type="submit" className="btn btn-primary mb-3  w-100">Login</button>
          <p className="text-center mt-2">
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login

