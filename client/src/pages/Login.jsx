import { useState } from "react";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async () => {

    const res = await axios.post(
      "http://localhost:5000/api/auth/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    alert("Login Success");
  };

  return (
    <div className="flex items-center justify-center h-screen">

      <div className="bg-white p-10 shadow rounded w-96">

        <h1 className="text-3xl font-bold mb-6">
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="border w-full p-3 mb-4"
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />

        <input
          type="password"
          placeholder="Password"
          className="border w-full p-3 mb-4"
          onChange={(e) =>
            setPassword(e.target.value)
          }
        />

        <button
          onClick={loginUser}
          className="bg-black text-white w-full py-3 rounded"
        >
          Login
        </button>

      </div>
    </div>
  );
};

export default Login;