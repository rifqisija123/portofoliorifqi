import Header from "../components/Header"; // Import header
import About from "../components/About"; // Import About
import Certificate from "../components/Certificate"; // Import Certificate
import Skills from "../components/Skills"; // Import Skills
import Contact from "../components/Contact"; //Import Contact

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header di bagian atas */}
      <Header />

      {/* Section About */}
      <About /> {/* Ini akan menampilkan halaman Tentang Saya */}

      {/* Section Certificate */}
      <Certificate /> {/* Ini akan menampilkan halaman Sertifikat */}

      {/* Section Skills */}
      <Skills /> {/* Ini akan menampilkan halaman Skills */}

      {/* Section Skills */}
      <Contact /> {/* Ini akan menampilkan halaman Skills */}
    </div>
  );
}
