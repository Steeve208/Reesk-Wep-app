import React, { useEffect, useState } from "react";
import money from "../Assets/Friends.png.jpg";
import home from "../Assets/home.png.jpg";
import referrals from "../Assets/Referrals.png.jpg";
import daily from "../Assets/Daily.png.jpg";
import airdrop from "../Assets/Airdrop.png.jpg";
import { useLocation, useNavigate } from "react-router-dom";

function Botonnavigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [currentScreen, setCurrentScreen] = useState("/");

  useEffect(() => {
    setCurrentScreen(location.pathname);
  }, [location]);

  return (
    <nav className="fixed px-[6px] text-white bottom-2 left-4 right-4 rounded-lg bg-black flex justify-around items-center h-[76px] z-50">
      <div
        onClick={() => navigate("/")}
        className={`flex flex-col items-center w-14 h-14 rounded-lg ${
          currentScreen === "/" ? "bg-black" : "bg-gray-900"
        }`}
      >
        <img className="w-7 h-7 object-contain" src={home} alt="Home" />
        <p className="text-xs">Home</p>
      </div>

      <div
        onClick={() => navigate("/Earn")}
        className={`flex flex-col items-center w-14 h-14 rounded-lg ${
          currentScreen === "/Earn" ? "bg-black" : "bg-gray-900"
        }`}
      >
        <img className="w-7 h-7 object-contain" src={money} alt="Earn" />
        <p className="text-xs">Earn</p>
      </div>

      <div
        onClick={() => navigate("/Shares")}
        className={`flex flex-col items-center w-14 h-14 rounded-lg ${
          currentScreen === "/Shares" ? "bg-black" : "bg-gray-900"
        }`}
      >
        <img className="w-7 h-7 object-contain" src={referrals} alt="Referrals" />
        <p className="text-xs">Referrals</p>
      </div>

      <div
        onClick={() => navigate("/Daily")}
        className={`flex flex-col items-center w-14 h-14 rounded-lg ${
          currentScreen === "/Daily" ? "bg-black" : "bg-gray-900"
        }`}
      >
        <img className="w-7 h-7 object-contain" src={daily} alt="Daily" />
        <p className="text-xs">Daily</p>
      </div>

      <div
        onClick={() => navigate("/Airdrop")}
        className={`flex flex-col items-center w-14 h-14 rounded-lg ${
          currentScreen === "/Airdrop" ? "bg-black" : "bg-gray-900"
        }`}
      >
        <img className="w-7 h-7 object-contain" src={airdrop} alt="Airdrop" />
        <p className="text-xs">Airdrop</p>
      </div>
    </nav>
  );
}

export default Botonnavigation;
