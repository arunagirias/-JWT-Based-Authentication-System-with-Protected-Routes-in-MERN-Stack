import { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const token = localStorage.getItem("token");
      const res = await axios.get("http://localhost:5000/api/protected", {
        headers: { Authorization: `Bearer ${token}` }
      });
      setMessage(res.data.message);
    };
    fetchData();
  }, []);

  return <h1>{message || "Loading..."}</h1>;
};

export default Dashboard;