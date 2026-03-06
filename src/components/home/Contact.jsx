import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Lottie from "lottie-react";
import ContactUs from "../../assets/animations/Contact Us.json";
import Success from "../../assets/animations/success.json";
import Footer from "../layouts/Footer";
import SectionHeader from "../common/SectionHeader";
import { useTranslation } from "react-i18next";

function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSucceeded, setIsSucceeded] = useState(false);
  const { t, i18n } = useTranslation();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const SERVICE_ID = "service_skk9tqm";
    const TEMPLATE_ID = "template_lbd499q";
    const PUBLIC_KEY = "tLtZXpMo6W2BJJ3bB";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setIsSucceeded(true);
        setIsSubmitting(false);
        form.current.reset();
        setTimeout(() => setIsSucceeded(false), 5000);
      },
      (error) => {
        console.log("FAILED...", error.text);
        setIsSubmitting(false);
        alert("Something went wrong, please try again.");
      },
    );
  };

  return (
    <section id="Contact" className=" text-[var(--text-main)]">
      <div className="pt-20 space-y-12 overflow-hidden">
        <SectionHeader
          title={t("contact.head.title")}
          subtitle={t("contact.head.description")}
        />

        <div className="relative z-0 flex flex-col md:flex-row justify-center md:justify-between items-center px-[3%] md:px-[10%]">
          <div data-aos="fade-up">
            <div className="bg-[var(--bg-card)] space-y-5 border border-[var(--border)] p-10 lg:w-[800px] rounded-2xl hover:border-[var(--primary)] hover:shadow-[0_0_60px_rgba(168,85,247,0.9)] hover:-translate-y-2 transition duration-300 ">
              <div className="space-y-5 rounded-2xl">
                <h2 className="font-bold text-2xl">
                  {t("contact.info.title")}
                </h2>
                <div className="flex space-y-3 space-x-5 flex-wrap justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center text-center bg-[var(--bg-card)] w-10 h-10 rounded-full">
                      <i className="fas fa-map-marker-alt text-[var(--primary)]"></i>
                    </div>
                    <div>
                      <div className="font-bold">
                        {t("contact.info.location.label")}
                      </div>
                      <div>{t("contact.info.location.value")}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center text-center bg-[var(--bg-card)] w-10 h-10 rounded-full">
                      <i className="fas fa-envelope text-[var(--primary)]"></i>
                    </div>
                    <div>
                      <div className="font-bold">
                        {t("contact.info.email.label")}
                      </div>
                      <a
                        href="mailto:ziadmostafa9866@gmail.com"
                        className="text-blue-500 hover:underline"
                      >
                        {t("contact.info.email.value")}{" "}
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex justify-center items-center text-center bg-[var(--bg-card)] w-10 h-10 rounded-full">
                      <i className="fas fa-phone text-[var(--primary)]"></i>
                    </div>
                    <div>
                      <div className="font-bold">
                        {t("contact.info.phone.label")}
                      </div>
                      <a
                        href="https://wa.me/201027797648?text=Hello!%20I%20have%20a%20project%20in%20mind."
                        dir="rtl"
                        className="hover:underline"
                      >
                        {t("contact.info.phone.value")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <h2 className="font-bold text-2xl">
                  {t("contact.form.title")}
                </h2>

                {isSucceeded && (
                  <div className="flex items-center gap-1 bg-green-500/10 p-2 rounded-lg border border-green-500/20">
                    <Lottie
                      className="w-12"
                      loop={false}
                      animationData={Success}
                    />
                    <p className="text-lg text-green-400">
                      {t("contact.form.succesMessage")}{" "}
                    </p>
                  </div>
                )}

                <form ref={form} onSubmit={sendEmail} className="space-y-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.form.name")}{" "}
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name" // تعديل: ليطابق {{name}} في الصورة
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent text-purple-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.form.email")}{" "}
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email" // تعديل: ليطابق {{email}} في الصورة
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent text-purple-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      {t("contact.form.message")}
                    </label>
                    <textarea
                      name="message" // تأكد أن {{message}} موجودة بنفس الاسم في محتوى القالب
                      id="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-[var(--border)] bg-transparent text-purple-300 focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#57379C] hover:bg-[#6d4bc2] text-white cursor-pointer hover:-translate-y-1 hover:shadow-[0_3px_10px_rgba(168,85,247,0.9)] transition duration-300 rounded-lg py-3 w-full flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? (
                      <span className="animate-pulse">
                        {t("contact.form.btn.pending")}
                      </span>
                    ) : (
                      <>
                        <i className="fas fa-paper-plane"></i>{" "}
                        {t("contact.form.btn.send")}
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div data-aos="fade-down">
            <div className="hidden md:flex w-[500px] hover:-translate-y-2 transition duration-300">
              <Lottie animationData={ContactUs} loop={true} />
            </div>
          </div>
        </div>

        <div className="h-[5px] border border-[var(--border)] rounded-full w-[80%] mx-auto"></div>
        <Footer />
      </div>
    </section>
  );
}

export default Contact;
