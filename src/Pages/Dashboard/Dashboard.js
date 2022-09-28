import React, { useEffect, useState } from "react";
import "./dashboard.css";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Fooddash from "../../Components/Fooddash/Fooddash";
import Image5 from "../../assets/images/image5.png";
import Image6 from "../../assets/images/image6.png";
import Image7 from "../../assets/images/image7.png";
import Image8 from "../../assets/images/image8.png";
import Image9 from "../../assets/images/image9.png";
import Image10 from "../../assets/images/image10.png";
// import Cart from "../../Components/Cart/Cart";
// import Order from "../../Components/Order/Order";

const Dashboard = () => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const signupData = sessionStorage.getItem("user");
    const userInfo = JSON.parse(signupData);
    setUserData(userInfo);
  }, []);

  const name = userData?.name;

  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-container">
        <div className="title">
          <div>
            <h1>Good morning, {name}</h1>
          </div>
          <div>
            <p>What delicious meal are you craving today?</p>
          </div>
        </div>

        <div className="food-container">
          <Fooddash imageName={Image5} altTitle="image5" />
          <Fooddash imageName={Image6} altTitle="image6" />
          <Fooddash imageName={Image7} altTitle="image7" />
          <Fooddash imageName={Image8} altTitle="image8" />
          <Fooddash imageName={Image9} altTitle="image9" />
          <Fooddash imageName={Image10} altTitle="image10" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
