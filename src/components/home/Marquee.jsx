import Marquee from "react-fast-marquee";
import { useTheme } from "../../context/ThemeContext";
import { useLang } from "../../context/LanguageContext"; // استيراد الـ Hook الخاص باللغة

// استيراد صور الدارك
import JavaScriptDark from "../../assets/images/skills-icons/JavaScript-Icon-Light.png";
import HtmlDark from "../../assets/images/skills-icons/Html5-Icon-Light.png";
import CSSDark from "../../assets/images/skills-icons/CSS3-Icon-Light.png";
import TailwindDark from "../../assets/images/skills-icons/Tailwind-Icon-Light.png";
import ReactDark from "../../assets/images/skills-icons/React-Icon-Light.png";
import NodeDark from "../../assets/images/skills-icons/Node-Icon-Light.png";
import BootstrapDark from "../../assets/images/skills-icons/Bootstrap-Icon-Light.png";
import MongoDBDark from "../../assets/images/skills-icons/MongoDB-Icon-Light.png";

// استيراد صور اللايت
import JavaScriptLight from "../../assets/images/skills-icons/JavaScript-Icon-Dark.png";
import HtmlLight from "../../assets/images/skills-icons/Html5-Icon-Dark.png";
import CSSLight from "../../assets/images/skills-icons/CSS3-Icon-Dark.png";
import TailwindLight from "../../assets/images/skills-icons/Tailwind-Icon-Dark.png";
import ReactLight from "../../assets/images/skills-icons/React-Icon-Dark.png";
import NodeLight from "../../assets/images/skills-icons/Node-Icon-Dark.png";

function BrandSlider() {
  const { theme } = useTheme();
  const { currentLang } = useLang(); // الحصول على اللغة الحالية (ar أو en)

  const isRTL = currentLang === "ar";

  const skills = [
    { id: 1, dark: JavaScriptDark, light: JavaScriptLight, name: "JS" },
    { id: 2, dark: HtmlDark, light: HtmlLight, name: "HTML" },
    { id: 3, dark: CSSDark, light: CSSLight, name: "CSS" },
    { id: 4, dark: TailwindDark, light: TailwindLight, name: "Tailwind" },
    { id: 5, dark: ReactDark, light: ReactLight, name: "React" },
    { id: 6, dark: NodeDark, light: NodeLight, name: "Node" },
    { id: 7, dark: BootstrapDark, light: BootstrapDark, name: "Bootstrap" },
    { id: 8, dark: MongoDBDark, light: MongoDBDark, name: "MongoDB" },
  ];

  return (
    /* 
       مهم جداً: أضفنا dir="ltr" هنا كـ Inline Style أو Class 
       لأن مكتبة Marquee لا تدعم الـ RTL بشكل تلقائي وتحدث فجوات (Gaps) بسببه.
    */
    <div 
      className="relative bg-white dark:bg-[var(--bg-dark-primary)] h-24 transition-colors duration-300 overflow-hidden" 
      dir="ltr"
    >
      {/* طبقة التدرج - Left */}
      <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-white dark:from-[var(--bg-dark-primary)] to-transparent"></div>
      
      {/* طبقة التدرج - Right */}
      <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-white dark:from-[var(--bg-dark-primary)] to-transparent"></div>

      <Marquee 
        speed={80} 
        gradient={false} 
        className="h-full"
        // إذا كانت اللغة عربية، اجعل الحركة لليمين، غير ذلك لليسار
        direction={isRTL ? "right" : "left"}
      >
        <div className="flex items-center h-full gap-16 px-4">
          {skills.map((skill) => (
            <img
              key={skill.id}
              src={theme === "dark" ? skill.dark : skill.light}
              className="h-8 md:h-12"
              alt={skill.name}
            />
          ))}
        </div>
      </Marquee>
    </div>
  );
}

export default BrandSlider;