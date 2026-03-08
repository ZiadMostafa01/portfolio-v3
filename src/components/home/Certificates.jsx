import { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { useTranslation } from "react-i18next";
// ... الاستيرادات اللي عندك
import { CONFIG } from "../../config/Api";
const API_URL = CONFIG.CERTIFICATES_API;
// استخراج الروابط من الـ Config والـ ENV
// Swiper Styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import SectionHeader from "../common/SectionHeader";

function Certificates() {
  const [certificates, setCertificates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const { t, i18n } = useTranslation();

  // جلب البيانات من السيرفر
  useEffect(() => {
    const fetchCertificates = async () => {
      try {
        const res = await axios.get(API_URL);
        setCertificates(res.data);
      } catch (err) {
        console.error("Error fetching certificates:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchCertificates();
  }, []);

  if (loading) {
    return (
      <div className="py-40 text-center text-[var(--text-title)] flex flex-col items-center justify-center gap-4">
        {/* ممكن تضيف Spinner هنا أو مجرد نص */}
        <div className="w-10 h-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xl font-semibold tracking-widest">
          {t("certificates.loading")}
        </p>
      </div>
    );
  }

  return (
    <div
      id="Certificates"
      className=" pt-24 space-y-12 sm:space-y-24 text-center"
    >
      <SectionHeader
        title={t("certificates.title")}
        subtitle={t("certificates.description")}
      />
      {/* Swiper Slider */}
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={50}
        coverflowEffect={{
          rotate: 20,
          stretch: 0,
          depth: 150,
          modifier: 2,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        modules={[Pagination, EffectCoverflow]}
        className="max-w-7xl mx-auto px-4"
        key={i18n.language}
        data-aos="fade-up"
        breakpoints={{
          0: {
            slidesPerView: 1.3,
          },
          500: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {certificates.length > 0 ? (
          certificates.map((cert, i) => (
            <SwiperSlide key={cert._id || i}>
              <div
                className="relative group cursor-pointer rounded-lg overflow-hidden"
                onClick={() => {
                  setIndex(i);
                  setOpen(true);
                }}
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  loading="lazy"
                  className="w-full h-[200px] sm:h-[250px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute inset-0 bg-black/50"></div>
                  <p className="relative text-white font-semibold px-4 text-center">
                    {cert.title}
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))
        ) : (
          /* رسالة تظهر داخل السلايدر أو مكانه لو مفيش شهادات */
          <div className="text-center py-10 ">
            <p className="text-xl text-[var(--text-subtitle)]">
              {t("certificates.empty")}{" "}
            </p>
          </div>
        )}
      </Swiper>

      {/* Modal View */}
      {open && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999] p-4"
          onClick={() => setOpen(false)} // إغلاق عند الضغط في أي مكان خارج الصورة
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* زرار الإغلاق */}
            <button
              onClick={() => setOpen(false)}
              className="absolute -top-10 right-0 text-3xl font-black cursor-pointer text-white hover:text-red-400 transition duration-500 hover:rotate-180 w-10 h-10 flex items-center justify-center"
            >
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 352 512"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
              </svg>
            </button>

            {/* الصورة المعروضة في المودال */}
            <img
              loading="lazy"
              src={certificates[index].image}
              className="max-h-[85vh] mx-auto rounded-lg shadow-2xl object-contain"
            />

            {/* عنوان الشهادة أسفل الصورة في المودال */}
            <p className="text-white text-center mt-4 text-lg font-medium">
              {certificates[index].title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Certificates;
