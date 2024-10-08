import Image from "next/image";

export default function About() {
  return (
    <section className="flex flex-col md:flex-row min-h-screen">
      {/* Bagian kiri - Background putih */}
      <div className="flex-1 bg-white p-6 md:p-8 flex items-center justify-center">
        <div className="max-w-md text-center md:text-left">
          <h1 className="text-3xl md:text-4xl text-black font-bold mb-8 md:mb-16">
            Tentang Saya
          </h1>
          <p className="text-base md:text-lg text-black mb-8 md:mb-16">
            Saya Bersekolah di SMKN 9 Kota Bekasi Kelas 12 Jurusan
            Sistem Informatika Jaringan dan Aplikasi (SIJA). Saya di bidang IT
            saya memegang Role di Backend Developer dalam menangani sebuah Website
            atau Aplikasi. Saya telah banyak mencoba keahlian dan berbagai macam
            projek yang pernah saya sudah pegang. Contohnya saya mendalami Bahasa
            Pemrograman seperti C#, C++, JavaScript, PHP, TypeScript, Python. Saya
            juga telah menciptakan banyak project yaitu Membuat Sistem Absensi,
            Membuat Running Text, Membuat Smart Trash, Membuat Website Dinamis,
            Membuat Aplikasi Kasir.
          </p>
        </div>
      </div>

      {/* Bagian kanan - Background hijau hanya terlihat pada layar md ke atas */}
      <div className="hidden md:flex flex-1 bg-green-500 p-0 items-center justify-center">
        <div className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] flex items-center justify-center">
          <Image
            src="/images/profile-bg.png"
            alt="Foto Profil"
            width={400}
            height={400}
            className="rounded-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
