import { useState, useEffect } from "react";
// استيراد AOS وتنسيقاتها داخل المكون
import AOS from "aos";
import "aos/dist/aos.css";

const Loader = ({ onFinished }) => {
  const [progress, setProgress] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // تشغيل AOS داخل اللودر
    AOS.init({
      duration: 800,
      once: true,
    });

    const interval = setInterval(() => {
      setProgress((prev) => {
        const increment = Math.random() * 15;
        const nextValue = Math.min(prev + increment, 100);

        if (nextValue >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setFadeOut(true);
            setTimeout(() => {
              if (onFinished) onFinished();
            }, 400);
          }, 200);
          return 100;
        }
        return nextValue;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [onFinished]);

  return (
    <div
      dir="ltr"
      className={`fixed inset-0 z-[10000] flex items-center justify-center bg-[#020617] transition-all duration-500 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      <div className="text-center px-4">
        {/* النصوص مع تأثيرات AOS */}
        <div className="font-mono text-[1.1rem] md:text-[1.2rem] text-purple-500 mb-8 space-y-2 opacity-80">
          <div data-aos="fade-up" data-aos-delay="100">
            const portfolio = {"{"}
          </div>

          <div className=" border-slate-800 pl-4">
            <div
              data-aos="fade-up"
              data-aos-delay="250"
              className="text-cyan-400"
            >
              loading: <span className="text-orange-400">true</span>,
            </div>
            <div
              data-aos="fade-up"
              data-aos-delay="400"
              className="text-cyan-400"
            >
              status:{" "}
              <span className="text-emerald-400">'initializing...'</span>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="550">
            {"}"};
          </div>
        </div>

        {/* Spinner */}
        <div className="my-8 relative" data-aos="fade-up" data-aos-delay="700">
          <div className="w-16 h-16 border-4 border-slate-800 border-t-purple-500 border-r-cyan-400 rounded-full animate-spin mx-auto"></div>
          <div className="absolute inset-0 w-16 h-16 bg-purple-500/10 blur-xl rounded-full mx-auto"></div>
        </div>

        {/* Progress Bar Container */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="w-[250px] md:w-[300px] h-1.5 bg-slate-800 rounded-full mx-auto overflow-hidden shadow-inner"
        >
          <div
            className="h-full bg-gradient-to-r from-purple-600 via-cyan-400 to-emerald-400 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Percentage Text */}
        <div
          data-aos="fade-up"
          data-aos-delay="700"
          className="font-mono text-cyan-400 mt-4 text-sm tracking-widest font-bold"
        >
          {Math.floor(progress)}%
        </div>
      </div>
    </div>
  );
};

export default Loader;
