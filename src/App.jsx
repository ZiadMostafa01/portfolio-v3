import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./pages/Home";

function App() {
  const [showScrollBtn, setshowScrollBtn] = useState(false);
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setshowScrollBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // لما اللودر يخلص، بنستنى لحظة بسيطة قبل ما نظهر المحتوى عشان الـ DOM يلحق يجهز
  const handleLoaderFinished = () => {
    setLoading(false);
    setTimeout(() => {
      setContentReady(true);
    }, 100); // تأخير بسيط جداً لضمان انسيابية الحركة
  };

  useEffect(() => {
    if (contentReady) {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false,
      });
      AOS.refresh();
    }
  }, [contentReady]);

  return (
    // الخلفية ثابتة هنا دايماً لمنع أي بياض
    <div className="min-h-screen bg-[var(--bg-primary)] overflow-x-hidden">
      {/* اللودر هيفضل فوق لحد ما يخلص خالص */}
      {loading && <Loader onFinished={handleLoaderFinished} />}

      {/* المحتوى: 
         1. بنستخدم opacity-0 لو لسه محملش و opacity-100 لما يجهز.
         2. transition-opacity بتخلي الظهور ناعم (Fade).
      */}
      <main
        className={`transition-opacity duration-1000 ease-in-out ${
          contentReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* بنعمل رندر للمكونات فقط لما اللودر يخلص عشان الأنميشن يبدأ صح */}
        {(contentReady || !loading) && (
          <>
            <Home />

            {/* زر العودة للأعلى */}
            <a
              href="#Home"
              style={{
                opacity: showScrollBtn ? 1 : 0,
                pointerEvents: showScrollBtn ? "auto" : "none",
              }}
              className="fixed bottom-5 right-5 w-10 h-10 shadow-xl flex justify-center items-center rounded-full transition-all duration-700 border border-[var(--border)] text-[var(--primary)] bg-[var(--bg-card)] backdrop-blur-sm z-50"
            >
              <i className="fas fa-arrow-up"></i>
            </a>
          </>
        )}
      </main>
    </div>
  );
}

export default App;
