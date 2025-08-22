import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import revotec from "@/assets/icons/revotec.svg";
import REV from "@/assets/icons/rev.svg";
import TEC from "@/assets/icons/tec.svg";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [showRev, setShowRev] = useState(false);
  const [showTec, setShowTec] = useState(false);
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowRev(true), 300);
    const timer2 = setTimeout(() => setShowTec(true), 1200);
    const timer3 = setTimeout(() => setShowLogo(true), 2000);

    const redirectTimer = setTimeout(() => {
      navigate("/login");
    }, 5000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(redirectTimer);
    };
  }, [navigate]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div
        className={`relative flex items-center transition-all duration-500 overflow-hidden ${
          showRev && showLogo && showTec ? "gap-1" : "gap-4"
        }`}
      >
        
        {showRev && showLogo && showTec && (
          <div className="shine-overlay"></div>
        )}

        {/* Imagen de REV */}
        {showRev && (
          <img
            src={REV}
            alt="REV"
            className="w-24 h-auto animate-fade-in-soft"
          />
        )}

        {/* Logo principal xd*/}
        {showLogo && (
          <img
            src={revotec}
            alt="Logo"
            className="w-16 h-auto animate-fade-in-soft"
          />
        )}

        {/* imagen de TEC */}
        {showTec && (
          <img
            src={TEC}
            alt="TEC"
            className="w-24 h-auto animate-fade-in-soft"
          />
        )}
      </div>
    </div>
  );
};

export default SplashScreen;
