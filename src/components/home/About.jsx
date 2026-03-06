import personalPhoto from "../../assets/images/personalphoto.png";
import SectionHeader from "../common/SectionHeader";
import BrandSlider from "./Marquee";
import { useTranslation } from "react-i18next";

const mySkills = [
  "React.js",
  "JavaScript",
  "Tailwind",
  "Bootstrap",
  "HTML",
  "CSS",
  "C++",
  "VS Code",
  "Git",
  "GitHub",
  "Adobe Photoshop",
  "Microsoft Office",
  "Google Drive",
  "Problem Solving",
  "AI Tools",
];
function About() {
  const { t, i18n } = useTranslation();

  return (
    <section id="About" className="relative text-[var(--text-main)] py-10">
      <SectionHeader title={t("about.title")} subtitle="" />

      <div className="flex flex-col xl:flex-row justify-between xl:gap-20 space-y-20 py-12 md:px-3 lg:px-20 xl:px-5 2xl:px-36 relative z-0">
        {/* Left Section (النص والصورة) */}
        {/* استخدمنا md:flex-row عشان العناصر تبقي جنب بعض في الشاشات المتوسطة */}
        {/* justify-between بتطرد النص والصورة بعيد عن بعض تلقائياً حسب اللغة */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-10 w-full">
          {/* حاوية النصوص */}
          <div
            data-aos="fade-up"
            className="w-full md:w-[60%] rounded-2xl text-xl px-5 space-y-6 tracking-normal leading-relaxed text-start"
          >
            <p>
              {t("about.description1")}
              <span className="animate-pulse px-1 text-blue-400 drop-shadow-[0_0_15px_rgba(59,130,246,0.8)] font-DGAsca">
                {t("about.firstName")} {t("about.secondName")}
              </span>

              {t("about.description2")}
            </p>
            <p>{t("about.description3")}</p>
          </div>

          {/* حاوية الصورة */}
          {/* shrink-0 بتمنع النص إنه يضغط الصورة ويصغر حجمها في العربي */}
          <div className="w-72 shrink-0 md:-translate-y-10 xl:-translate-y-10">
            <img
              src={personalPhoto}
              alt="Ziad Mostafa"
              className="w-full h-auto object-contain"
            />
          </div>
        </div>

        {/* Right Section (الخبرة والتعليم والمهارات) */}
        <div dir="ltr" className="space-y-5 mx-auto xl:mx-0 px-5 md:px-0">
          {/* كارت الخبرة */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="bg-[var(--bg-card)] space-y-5 border hover:border-[var(--primary)] hover:shadow-[0_0_60px_rgba(168,85,247,0.9)] border-[var(--border)] p-10 xl:w-[450px] rounded-2xl hover:-translate-y-2 transition duration-300">
              <h2 className="font-bold text-2xl">Experience</h2>
              <div className="relative border-s-2 border-gray-300 ps-6">
                <div className="mb-10">
                  <div className="absolute -start-[11px] w-5 h-5 rounded-full bg-[var(--primary)] border-2 border-white"></div>
                  <h3 className="text-xl font-semibold">
                    Frontend Developer - DEPI
                  </h3>
                  <span className="text-sm">2024 – Present</span>
                  <p className="mt-2">
                    Built responsive web apps using React & Tailwind.
                  </p>
                </div>
                <div>
                  <div className="absolute -start-[11px] w-5 h-5 rounded-full bg-[var(--primary)] border-2 border-white"></div>
                  <h3 className="text-xl font-semibold">Personal Projects</h3>
                  <span className="text-sm">2022 – 2023</span>
                  <p className="mt-2">
                    Created side projects to practice React and APIs.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* كارت التعليم */}
          <div data-aos="fade-left" data-aos-duration="1000">
            <div className="bg-[var(--bg-card)] space-y-2 border hover:border-[var(--primary)] hover:shadow-[0_0_60px_rgba(168,85,247,0.9)] border-[var(--border)] p-10 xl:w-[450px] rounded-2xl hover:-translate-y-2 transition duration-300">
              <h2 className="font-bold text-2xl">Education</h2>
              <div>
                <h3>Fayoum University | 2024 - present</h3>
                <h3>Faculty of Computing and Artificial Intelligence</h3>
              </div>
            </div>
          </div>

          {/* كارت المهارات */}
          <div data-aos="fade-right" data-aos-duration="1000">
            <div className="bg-[var(--bg-card)] border space-y-2 hover:border-[var(--primary)] hover:shadow-[0_0_60px_rgba(168,85,247,0.9)] border-[var(--border)] py-5 px-10 xl:w-[450px] rounded-2xl hover:-translate-y-2 transition duration-300">
              <h2 className="font-bold text-2xl">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {mySkills.map((skill, index) => (
                  <div
                    key={index}
                    className="border border-zinc-700 px-2 rounded-md"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* BrandSlider */}
      <div className="xl:hidden">
        <BrandSlider />
      </div>
      {/* حاوية الـ BrandSlider في الـ Desktop */}
      <div className="absolute bottom-25 inset-inline-start-0 w-full hidden xl:flex">
        {/* الـ Div الداخلي ده هو اللي بياخد نفس الـ padding بتاع النص عشان يوازيه */}
        <div className="w-full px-5 md:px-3 lg:px-20 xl:px-5 2xl:px-36">
          {/* الـ width هنا بقى 100% أو حسب ما تحب عشان يملأ المساحة اللي تحت النص */}
          <div className="xl:w-[60%]">
            <BrandSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
