  import { useState } from "react";
  import { db, storage } from "../config/firebase";
  import { collection, addDoc } from "firebase/firestore";
  import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

  function Dashboard() {
    const [formData, setFormData] = useState({
      title: "",
      desc: "",
      github: "",
      link: "",
      skills: "",
    });
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!image) return alert("من فضلك ارفع صورة المشروع!");
      setUploading(true);

      try {
        // 1. رفع الصورة لـ Firebase Storage وناخد الرابط بتاعها
        const imageRef = ref(storage, `projects/${Date.now()}_${image.name}`);
        await uploadBytes(imageRef, image);
        const imageUrl = await getDownloadURL(imageRef);

        // 2. نخزن البيانات في Firestore
        await addDoc(collection(db, "projects"), {
          projectTitle: formData.title,
          description: formData.desc,
          github: formData.github,
          link: formData.link,
          skills: formData.skills.split(","), // بيحول النصوص لمصفوفة
          imgPath: imageUrl,
          createdAt: new Date(),
        });

        alert("المشروع اترفع بنجاح! 🔥");
        e.target.reset(); // تصفير الفورم
      } catch (err) {
        console.error(err);
        alert("حصل خطأ أثناء الرفع");
      }
      setUploading(false);
    };

    return (
      <div className="p-10 bg-slate-900 min-h-screen text-white">
        <h2 className="text-3xl font-bold mb-8">إضافة مشروع جديد</h2>
        <form onSubmit={handleSubmit} className="max-w-xl space-y-4">
          <input
            type="text"
            placeholder="اسم المشروع"
            className="w-full p-3 bg-slate-800 rounded"
            required
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />

          <textarea
            placeholder="وصف المشروع"
            className="w-full p-3 bg-slate-800 rounded h-32"
            required
            onChange={(e) => setFormData({ ...formData, desc: e.target.value })}
          />

          <input
            type="text"
            placeholder="المهارات (مثال: React, Tailwind, Node)"
            className="w-full p-3 bg-slate-800 rounded"
            onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
          />

          <input
            type="url"
            placeholder="رابط GitHub"
            className="w-full p-3 bg-slate-800 rounded"
            onChange={(e) => setFormData({ ...formData, github: e.target.value })}
          />

          <input
            type="url"
            placeholder="رابط الديمو (Live)"
            className="w-full p-3 bg-slate-800 rounded"
            onChange={(e) => setFormData({ ...formData, link: e.target.value })}
          />

          <div className="flex flex-col gap-2">
            <label>صورة المشروع:</label>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files[0])}
              required
            />
          </div>

          <button
            type="submit"
            disabled={uploading}
            className="bg-cyan-600 px-8 py-3 rounded-full font-bold hover:bg-cyan-500 transition"
          >
            {uploading ? "جاري الرفع... ⏳" : "حفظ المشروع في الموقع"}
          </button>
        </form>
      </div>
    );
  }

  export default Dashboard;
