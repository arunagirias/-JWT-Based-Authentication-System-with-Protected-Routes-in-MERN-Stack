
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("http://localhost:5000/api/auth/register", form);
    localStorage.setItem("token", res.data.token);
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input type="email" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <input type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;