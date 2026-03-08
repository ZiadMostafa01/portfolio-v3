import { useState, useEffect } from "react"; // ضفنا useEffect
import axios from "axios"; // ضفنا axios
import SectionHeader from "../common/SectionHeader";
import { useTranslation } from "react-i18next";
import { CONFIG } from "../../config/Api"; // تأكد من المسار حسب مكان الملف
const checkTools = {
  completed:
    "bg-green-500 rounded-full text-white text-center font-semibold w-fit px-3",
  underDevelop:
    "bg-red-500 rounded-full  text-white  text-center font-semibold w-fit px-3",
};
const tools = "bg-[var(--bg-card)] text-center rounded-full px-3";

function Projects() {
  const { t, i18n } = useTranslation();

  // 1. الجزء الخاص بجلب البيانات من الداتابيز
  const [dbProjects, setDbProjects] = useState([]);
  const [loading, setLoading] = useState(true); // ضيف ده هنا
  useEffect(() => {
    setLoading(true); // نبدأ التحميل
    axios
      .get(CONFIG.PROJECTS_API)
      .then((res) => {
        const formatted = res.data.map((proj) => {
          // تحديد الاستايل بناءً على الـ status
          let statusStyle = checkTools.completed;
          if (proj.status === "Under Develop") {
            statusStyle = checkTools.underDevelop;
          }

          return {
            id: proj._id,
            imgPath: proj.image,
            projectTitle: proj.title,
            description: proj.description,
            state: statusStyle,
            stateName: proj.status || "Completed",
            // تحويل الـ string لمصفوفة لو مكنتش مصفوفة أصلاً
            skills: Array.isArray(proj.skills)
              ? proj.skills
              : proj.skills
                ? proj.skills.split(",").map((s) => s.trim())
                : [],
            link: proj.liveLink,
            github: proj.githubLink,
          };
        });
        setDbProjects(formatted);
      })
      .catch((err) => console.log("Error fetching projects:", err))
      .finally(() => setLoading(false)); // أول ما يخلص (نجاح أو فشل) وقف التحميل
  }, []);
  // 2. مصفوفتك الثابتة زي ما هي بالظبط
  const staticProjects = [];

  // دمج الاتنين (الجديد يظهر الأول)
  const combinedProjects = [...dbProjects, ...staticProjects];

  const [visibleCount, setVisibleCount] = useState(3);
  const showMoreProjects = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  if (loading) {
    return (
      <div className="py-40 text-center text-[var(--text-title)] flex flex-col items-center justify-center gap-4">
        {/* ممكن تضيف Spinner هنا أو مجرد نص */}
        <div className="w-10 h-10 border-4 border-[var(--primary)] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-xl font-semibold tracking-widest">
          {t("projects.loading")}
        </p>
      </div>
    );
  }
  return (
    <section id="Projects" className="text-[var(--text-main)]">
      <div className="py-20 space-y-24">
        <SectionHeader
          title={t("projects.head.title")}
          subtitle={t("projects.head.description")}
        />
        <div className="relative z-0 px-2 flex flex-wrap justify-center items-start gap-10">
          {combinedProjects.length > 0 ? (
            combinedProjects.slice(0, visibleCount).map((item) => (
              <div key={item.id} data-aos="zoom-in">
                <div className="bg-[var(--bg-card)] border transition duration-300 hover:border-[var(--primary)] hover:shadow-[0_0_20px_rgba(168,85,247,0.9)] border-[var(--border)] rounded-lg w-full max-w-[460px]">
                  <div>
                    <img
                      src={item.imgPath}
                      className="rounded-t-lg w-full h-full object-cover"
                      alt={item.projectTitle}
                    />
                    <div className="px-7 py-6">
                      <div className="mb-5">
                        <h1 className="font-bold text-[var(--text-title)]">
                          {item.projectTitle}
                        </h1>
                        <p className="line-clamp-4">{item.description}</p>
                      </div>

                      <div className="space-y-5 mb-6">
                        <div className={item.state}>
                          <span className="text-sm">{item.stateName}</span>
                        </div>
                        <ul className="flex gap-3 flex-wrap">
                          {item.skills.map((skill, index) => (
                            <li key={index} className={tools}>
                              <span className="text-sm">{skill}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-[var(--bg-card)] h-[1px] mb-3"></div>

                      <div className="flex justify-between">
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="space-x-2 hover:text-[var(--primary)] transition duration-300"
                        >
                          <i className="fa-solid fa-up-right-from-square"></i>
                          <span className="text-lg font-bold">
                            Live Project
                          </span>
                        </a>
                        <a
                          href={item.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-3xl hover:text-[var(--primary)] transition duration-300"
                        >
                          <i className="fab fa-github"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )) // قفلة الـ map
          ) : (
            // حالة لو المصفوفة فاضية
            <div className="text-center py-10 ">
              <p className="text-xl text-[var(--text-subtitle)]">
                {t("projects.empty")}
              </p>
            </div>
          )}
        </div>

        {visibleCount < combinedProjects.length && (
          <div className="flex justify-center mt-10">
            <button
              onClick={showMoreProjects}
              className="cursor-pointer flex items-center gap-2 bg-white/5 border-2 border-[var(--border)] hover:border-[var(--primary)] hover:shadow-[0_0_30px_rgba(192,132,252,0.5)] text-[var(--primary)] px-8 py-4 rounded-xl font-bold transition-all hover:-translate-y-1"
            >
              {t("projects.buttons.button2")}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

export default Projects;
