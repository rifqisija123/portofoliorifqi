import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default function Header() {
  return (
    <>
      <header className="bg-gray-800 text-gray-200 py-4 px-6 md:px-10 lg:px-20">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8 lg:px-16">
          <nav className="flex flex-wrap justify-center space-x-4 md:space-x-8 mb-4 md:mb-0">
            <Link href="#Header" legacyBehavior>
              <a className="hover:text-gray-500">Home</a>
            </Link>
            <Link href="#About" legacyBehavior>
              <a className="hover:text-gray-500">Tentang Saya</a>
            </Link>
            <Link href="#Certificate" legacyBehavior>
              <a className="hover:text-gray-500">Sertifikat</a>
            </Link>
            <Link href="#Skills" legacyBehavior>
              <a className="hover:text-gray-500">Kemampuan</a>
            </Link>
            <Link href="#Contact" legacyBehavior>
              <a className="hover:text-gray-500">Kontak</a>
            </Link>
          </nav>
          <div className="flex justify-center space-x-4">
            <Link href="https://www.linkedin.com/in/rifqi-tarmono123/" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </Link>
            <Link href="https://github.com/rifqisija123" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </Link>
            <Link href="https://x.com/RifqiGaming123" legacyBehavior>
              <a target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-white transition-colors">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </Link>
          </div>
        </div>
      </header>

      <section className="bg-black text-white py-8 px-4 lg:py-16 -mt-1">
        <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center justify-between space-y-8 lg:space-y-0 px-4 md:px-8 lg:px-16">
          {/* Teks bagian kiri */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">Rifqi Ainur Rahman Tarmono</h1>
            <p className="text-base md:text-lg text-gray-400 mb-6">
              Saya seorang siswa SMKN 9 Kota Bekasi Kelas 12, jurusan Sistem Informatika Jaringan dan Aplikasi.
              Saya memiliki ketertarikan dalam pengembangan Web, IoT, dan teknologi lainnya.
              Di Jurusan ini saya sedang mendalami sebuah divisi yaitu Backend Developer. Saya telah
              mendalami banyak bahasa pemrograman, library, dan framework.
            </p>
            <Link href="/images/cvrifqi.png" legacyBehavior>
              <a className="inline-block bg-green-500 text-white font-semibold py-2 px-6 md:py-4 md:px-16 rounded-full hover:bg-green-600 transition-colors">
                Lihat CV Saya &gt;
              </a>
            </Link>
          </div>

          {/* Foto Profil bagian kanan */}
          <div className="lg:w-1/3 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-gray-300">
              <Image
                src="/images/passphoto.jpeg"
                alt="Foto Profil"
                width={185}
                height={150}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
