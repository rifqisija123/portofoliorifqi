import Image from "next/image";

export default function Skills() {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl text-black font-bold mb-8">Kemampuan Saya</h2>
        
        {/* Grid responsif untuk logo */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo 1 */}
          <div className="flex justify-center items-center p-8 max-w-60 max-h-60">
            <Image
              src="/images/html5.png"
              alt="Logo 1"
              width={500}
              height={80}
              className="object-contain"
            />
          </div>
          {/* Logo 2 */}
          <div className="flex justify-center items-center p-6 max-w-60 max-h-60">
            <Image
              src="/images/php.png"
              alt="Logo 2"
              width={500}
              height={80}
              className="object-contain"
            />
          </div>
          {/* Logo 3 */}
          <div className="flex justify-center items-center p-12 max-w-60 max-h-60">
            <Image
              src="/images/laravel.png"
              alt="Logo 3"
              width={500}
              height={80}
              className="object-contain"
            />
          </div>
          {/* Logo 4 */}
          <div className="flex justify-center items-center p-12 max-w-60 max-h-60">
            <Image
              src="/images/codeigniter.png"
              alt="Logo 4"
              width={500}
              height={80}
              className="object-contain"
            />
          </div>

          {/* Logo 5 */}
          <div className="flex justify-center items-center p-12 max-w-60 max-h-60">
            <Image
              src="/images/js.png"
              alt="Logo 5"
              width={500}
              height={80}
              className="object-contain"
            />
          </div>
          {/* Logo 6 */}
          <div className="flex justify-center items-center p-4 max-w-60 max-h-60">
            <Image
              src="/images/nodejs.png"
              alt="Logo 6"
              width={500}
              height={80}
              className="object-contain"
            />
          </div>
          {/* Logo 7 */}
          <div className="flex justify-center items-center p-8 max-w-60 max-h-60">
            <Image
              src="/images/python.png"
              alt="Logo 7"
              width={500}
              height={80}
              className="object-contain"
            />
          </div>
          {/* Logo 8 */}
          <div className="flex justify-center items-center p-5 max-w-60 max-h-60">
            <Image
              src="/images/typescript-removebg-preview.png"
              alt="Logo 8"
              width={500}
              height={80}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
