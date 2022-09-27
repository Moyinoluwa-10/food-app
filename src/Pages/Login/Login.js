import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";
import Error from "../../Components/Error/Error";
import LoginImage from "../../assets/images/login.png";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});
  const [error, setError] = useState(false);

  let errorComponent;

  if (error) {
    errorComponent = <Error errorMessage={"Email or Password not correct"} />;
  }

  useEffect(() => {
    const signupData = sessionStorage.getItem("user");
    console.log(signupData);
    const userInfo = JSON.parse(signupData);
    setUserData(userInfo);
    console.log(userData);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData?.email === email && userData?.password === password) {
      navigate("/dashboard");
    } else {
      setError(true);
    }
  };

  return (
    <div className="login">
      <div className="image-container">
        <img src={LoginImage} alt="login" />
      </div>

      <div className="form-container">
        <div>
          <h1>Welcome Back!</h1>
        </div>

        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Your Email address"
                value={email}
                autoComplete={"true"}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Your Password"
                value={password}
                autoComplete={"current-password"}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {errorComponent}

            <div>
              <button type="submit">LOGIN</button>
            </div>
          </form>
        </div>

        <div className="bottom-container">
          <div>
            <p>
              <a href="./signup">Create an Account</a>
            </p>
          </div>
          <div>
            <p>
              <Link to={"/"}>Forgot Password</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
