import { useTranslation } from "react-i18next";
import Particles from "../Particles";
import { Typewriter } from "react-simple-typewriter";
import cv from "../../assets/files/ZiadMostafaCV.pdf";

const Landing = () => {
  const { t, i18n } = useTranslation();

  return (
    <section
      id="Home"
      className="min-h-screen pt-[82px] lg:pt-0  flex items-center  relative overflow-hidden "
    >
      {/* Background Layer */}
      <div className="absolute inset-0 z-0">
        <div className="code-grid-bg"></div>
        <Particles />
      </div>

      <div
        key={i18n.language}
        className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center  px-8  gap-6  z-10"
      >
        {/* Content Side */}
        <div>
          <div
            data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
            data-aos-delay="100"
            className="font-code text-[var(--primary)] sm:text-xl mb-4"
          >
            <Typewriter
              key={i18n.language}
              words={[t("landing.title")]}
              loop={true} // الجملة تتكتب مرة وخلاص
              cursor
              cursorStyle="|"
              typeSpeed={50} // سرعة الكتابة
            />
          </div>

          <h1
            data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
            data-aos-delay="200"
            className="hero-name font-code text-3xl sm:text-5xl md:text-7xl font-bold mb-8 text-white"
          >
            <span className="text-gradient">{t("landing.subTitle")}</span>
          </h1>

          <div
            data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
            data-aos-delay="300"
            className="text-gradient font-code  text-xl sm:text-2xl mb-8"
          >
            <span>// Full Stack Developer & UI/UX Designer</span>
          </div>

          <p
            data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
            data-aos-delay="400"
            className="text-[var(--text-main)] text-lg mb-12 max-w-xl leading-relaxed"
          >
            {t("landing.description")}
          </p>

          <div className="flex flex-wrap gap-8 mb-12">
            <div
              data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
              data-aos-delay="500"
            >
              <a
                href={cv}
                download="Ziad_Mostafa_CV.pdf"
                className="flex items-center gap-2 border-2 border-[var(--secondary)] bg-[var(--secondary)] hover:bg-[#57379C] text-white font-bold px-8 py-4 cursor-pointer hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(168,85,247,0.9)]  transition duration-300 rounded-lg"
              >
                <span>{t("landing.buttons.downloadCV")}</span>
                <svg
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12"
                    stroke="currentColor" // التغيير هنا
                    strokeWidth="2" // تأكد أنها strokeWidth في React (CamelCase)
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>

            <div
              data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
              data-aos-delay="600"
            >
              {" "}
              <a
                href="#Projects"
                className="flex items-center gap-2 bg-white/5 border-2 border-[var(--border)] hover:border-[var(--primary)] hover:shadow-[0_0_30px_rgba(192,132,252,0.5)] text-[var(--primary)] px-8 py-4 rounded-xl font-bold   transition-all hover:-translate-y-1"
              >
                <span>{t("landing.buttons.viewWork")}</span>
                <i className="fas fa-code"></i>
              </a>
            </div>
          </div>
          <div className="flex gap-6">
            <div
              className="flex"
              data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
              data-aos-delay="700"
              data-aos-offset="0"
            >
              {" "}
              <a
                href="https://www.facebook.com/ziad.mostafa.5245961"
                target="_blank"
                className="p-3 rounded-xl backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-[var(--social-icons)]/60 to-[var(--social-icons)]/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-[var(--social-icons)]/40 group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                <div className="relative z-10">
                  <svg
                    className="w-5 h-5 fill-current text-[var(--text-main)] group-hover:text-blue-400 transition-colors duration-300"
                    viewBox="0 0 320 512"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M279.14 288l14.22-92.66h-88.91V127.42c0-25.35 12.42-50.06 52.24-50.06H293V6.26S259.5 0 225.36 0c-73.22 0-121.1 44.38-121.1 124.72V195.3H22.89V288h81.36v224h100.17V288z" />
                  </svg>
                </div>
              </a>
            </div>
            <div
              className="flex"
              data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
              data-aos-delay="800"
              data-aos-offset="0"
            >
              {" "}
              <a
                href="https://github.com/ZiadMostafa01"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl backdrop-blur-lg border border-gray-500/20 bg-gradient-to-tr from-[var(--social-icons)]/60 to-[var(--social-icons)]/40 shadow-lg hover:shadow-2xl hover:shadow-gray-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-gray-500/50 hover:bg-gradient-to-tr hover:from-gray-500/10 hover:to-[var(--social-icons)]/40 group relative overflow-hidden"
              >
                {/* تأثير اللمعة */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

                {/* أيقونة GitHub */}
                <div className="relative z-10">
                  <svg
                    className="w-5 h-5 fill-current text-[var(--text-main)] group-hover:text-[var(--text-main)] transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.21 11.39.6.11.82-.26.82-.58
        0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.74.08-.74
        1.21.09 1.84 1.24 1.84 1.24 1.08 1.84 2.83 1.31 3.52 1.01.11-.78.42-1.31.76-1.61-2.67-.3-5.47-1.34-5.47-5.95
        0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.48 11.48 0 0 1 3.01-.4
        c1.02 0 2.05.14 3.01.4 2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22
        0 4.62-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22 0 1.6-.01 2.88-.01 3.27
        0 .32.22.7.83.58C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <div
              className="flex"
              data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
              data-aos-delay="900"
              data-aos-offset="0"
            >
              <a
                href="https://www.linkedin.com/in/ziadmostafa-dev/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl backdrop-blur-lg border border-blue-500/20 bg-gradient-to-tr from-[var(--social-icons)]/60 to-[var(--social-icons)]/40 shadow-lg hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-blue-500/50 hover:bg-gradient-to-tr hover:from-blue-500/10 hover:to-[var(--social-icons)]/40 group relative overflow-hidden"
              >
                {/* تأثير اللمعة */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

                {/* أيقونة LinkedIn */}
                <div className="relative z-10">
                  <svg
                    className="w-5 h-5 text-[var(--text-main)] group-hover:text-blue-400 transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path
                      d="M100.28 448H7.4V148.9h92.88zm-46.44-340C24.09 108 0 83.5 0 53.8 
  0 24.6 24.09 0 53.84 0c29.7 0 53.78 24.6 53.78 53.8 0 
  29.7-24.08 54.2-53.78 54.2zM447.9 448h-92.4V304.1c0-34.3-.7-78.3-47.7-78.3-47.7 
  0-55 37.2-55 75.6V448h-92.4V148.9h88.6v40.8h1.3c12.3-23.2 
  42.4-47.7 87.2-47.7 93.3 0 110.5 61.4 110.5 141.3V448z"
                    />
                  </svg>
                </div>
              </a>
            </div>
            <div
              className="flex"
              data-aos={i18n.language === "ar" ? "fade-left" : "fade-right"}
              data-aos-delay="1000"
              data-aos-offset="0"
            >
              {" "}
              <a
                href="https://wa.me/201027797648" // حط رقمك هنا بالكود الدولي (مثلاً 20 لمصر)
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl backdrop-blur-lg border border-emerald-500/20 bg-gradient-to-tr from-[var(--social-icons)]/60 to-[var(--social-icons)]/40 shadow-lg hover:shadow-2xl hover:shadow-emerald-500/30 hover:scale-110 hover:rotate-2 active:scale-95 active:rotate-0 transition-all duration-300 ease-out cursor-pointer hover:border-emerald-500/50 hover:bg-gradient-to-tr hover:from-emerald-500/10 hover:to-[var(--social-icons)]/40 group relative overflow-hidden"
              >
                {/* تأثير اللمعة (Shiny Effect) باللون الأخضر */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

                {/* أيقونة WhatsApp */}
                <div className="relative z-10">
                  <svg
                    className="w-5 h-5 text-[var(--text-main)] group-hover:text-emerald-400 transition-colors duration-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    fill="currentColor"
                  >
                    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.1 0-65.6-8.9-93.9-25.7l-6.7-4-69.8 18.3 18.7-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.6-30.6-38.2-3.2-5.6-.3-8.6 2.5-11.3 2.5-2.5 5.6-6.5 8.3-9.8 2.8-3.3 3.7-5.6 5.6-9.2 1.8-3.7.9-6.9-.5-9.8-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div
          dir="ltr"
          data-aos="fade-up"
          data-aos-offset="0"
          key={i18n.language}
          className="relative flex justify-center items-center pb-10 lg:pb-0"
        >
          {/* الدائرة الكبيرة الثابتة */}
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]">
            {/* خلفية التوهج (Glow) */}
            <div className="absolute inset-[-10%] rounded-full animate-pulse bg-[radial-gradient(circle,rgba(255,107,157,0.2)_0%,transparent_70%)]"></div>

            {/* الدائرة والـ Icon الثابتين */}
            <div className="bg-[var(--bg-secondary)]/70 border-[var(--primary)] border-[4px] shadow-[0_0_30px_rgba(192,132,252,0.3)] rounded-full w-full h-full overflow-hidden flex items-center justify-center relative z-10">
              <div className="text-[var(--primary)]/30 text-7xl sm:text-9xl">
                <i className="fas fa-code animate-spin-once  group-hover:rotate-12 group-hover:scale-120 transition duration-300"></i>
              </div>
            </div>

            {/* الحاوية الدوارة للـ Badges فقط */}
            {/* الـ div ده واخد absolute و inset-0 عشان يغطي نفس مساحة الدائرة بالظبط */}
            <div className="absolute inset-0 z-20 animate-rotate-once pointer-events-none">
              {/* الـ pointer-events-none عشان الأب ميسدش الضغط على الأزرار اللي تحته، والـ Badge هترجعها لنفسها */}

              <div className="relative w-full h-full pointer-events-auto">
                <Badge
                  icon="fab fa-react"
                  title="React"
                  sub="Redux, Router, Hooks"
                  classes="top-5 right-3 sm:-right-10"
                  delay="0s"
                />

                <Badge
                  icon="fab fa-node-js"
                  title="Node.js"
                  sub="Express, API, MongoDB"
                  classes="bottom-6 sm:bottom-20 -right-10 sm:-right-16"
                  delay="-1s"
                />

                <Badge
                  icon="fab fa-js"
                  title="JavaScript"
                  sub="ES6+, TypeScript, Tailwind"
                  classes="top-1/2 -left-10 sm:-left-24"
                  delay="-2s"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Mouse */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-2">
        <div className="scroll-mouse w-8 h-12 border-2 border-[#334155] rounded-2xl flex justify-center p-2">
          <div className="scroll-wheel w-1 h-3 bg-[var(--primary)] rounded-full animate-[scrollWheel_2s_infinite]"></div>
        </div>
        <span className="scroll-text font-code text-sm text-[#94a3b8]">
          Scroll Down
        </span>
      </div>
    </section>
  );
};

// مكون صغير للـ Badges لتقليل تكرار الكود
const Badge = ({ icon, title, sub, classes, delay }) => (
  <div
    className={`floating-badge absolute ${classes} bg-[var(--bg-secondary)]/70 border border-[var(--border)] hover:shadow-[0_0_30px_rgba(192,132,252,0.5)] p-4 rounded-2xl flex items-center gap-4 shadow-xl w-[160px] sm:min-w-[200px]  z-20 transition-all duration-300 hover:border-[var(--primary)]`}
    style={{ animationDelay: delay }} // هنا بنتحكم في وقت بداية الحركة
  >
    <i className={`${icon} text-3xl text-[var(--primary)]`}></i>
    <div className="flex flex-col text-left">
      <span className="text-[var(--text-primary)] font-bold text-sm">
        {title}
      </span>
      <span className="text-[var(--text-secondary)] text-[10px]">{sub}</span>
    </div>
  </div>
);

export default Landing;
