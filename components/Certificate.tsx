import Image from "next/image";

export default function Certificate() {
  return (
    <section className="bg-black py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 text-center">
          SERTIFIKAT
        </h2>

        {/* Grid untuk gambar sertifikat */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {/* Kolom Kiri */}
          <div className="space-y-8">
            {/* Gambar Sertifikat 1 */}
            <div className="relative bg-white p-1 rounded-lg overflow-hidden border-4 border-white max-w-72 mx-auto md:mb-0">
                <Image
                src="/images/basic-figma.png"
                alt="Sertifikat 1"
                width={300}
                height={400}
                className="rounded-lg object-cover"
                />
            </div>

            {/* Gambar Sertifikat 2 */}
            <div className="relative bg-white p-1 rounded-lg overflow-hidden border-4 border-white max-w-72 mx-auto md:mb-0">
                <Image
                src="/images/robotic-iot.png"
                alt="Sertifikat 2"
                width={300}
                height={400}
                className="rounded-lg object-cover"
                />
            </div>
          </div>

            {/* Kolom Kanan */}
          <div className="space-y-8">
            {/* Gambar Sertifikat 3 */}
            <div className="relative bg-white p-1 rounded-lg overflow-hidden border-4 border-white max-w-72 mx-auto md:mb-0">
                <Image
                src="/images/robotic-sensor.png"
                alt="Sertifikat 3"
                width={300}
                height={400}
                className="rounded-lg object-cover"
                />
            </div>

            {/* Gambar Sertifikat 4 */}
            <div className="relative bg-white p-1 rounded-lg overflow-hidden border-4 border-white max-w-72 mx-auto md:mb-0">
                <Image
                src="/images/raspberry-pi.png"
                alt="Sertifikat 4"
                width={300}
                height={400}
                className="rounded-lg object-cover"
                />
            </div>
        </div>
        </div>
      </div>
    </section>
  );
}
