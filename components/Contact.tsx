export default function Contact() {
    return (
      <section className="bg-black py-12 min-h-screen">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">
            Berikan Saya Masukan dan Saran Tentang Portofolio Saya
          </h2>
          <br />
          <br />
          {/* Formulir Kontak */}
          <form className="max-w-lg mx-auto bg-gray-800 p-6 rounded-lg shadow-md space-y-6">
            {/* Input Email */}
            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 text-white"
                placeholder="Masukkan Email Anda"
                required
              />
            </div>
  
            {/* Input Mobile */}
            <div className="text-left">
              <label htmlFor="mobile" className="block text-sm font-medium text-gray-200 mb-2">
                No Telp
              </label>
              <input
                type="number"
                id="mobile"
                className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 text-white"
                placeholder="Masukkan Nomor Telepon Anda"
                required
              />
            </div>
  
            {/* Input Message */}
            <div className="text-left">
              <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                Pesan
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full p-3 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 bg-gray-700 text-white"
                placeholder="Masukkan Pesan atau Saran Anda"
                required
              ></textarea>
            </div>
  
            {/* Button Submit */}
            <button
              type="submit"
              className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
            >
              Submit &gt;
            </button>
          </form>
        </div>
      </section>
    );
  }
  