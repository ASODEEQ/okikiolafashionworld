export default function AddressPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-28 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Our Store Locations</h1>
        <p className="text-lg text-gray-800 mb-10">
          Visit any of our stores around the world. We’re closer than you think!
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-pink-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-pink-600 mb-3">Nigeria 🇳🇬</h2>
            <p>Main Store: No 50, Akintunde House, Odi Olowo, Osogbo, Osun State</p>
            <p>Branch Store: No. 12, Oketunji Street, Alekuwodo, Osogbo</p>
          </div>

          <div className="bg-pink-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-pink-600 mb-3">China 🇨🇳</h2>
            <p>No 257, Ton Building, Guangzhou, Guangdong Province</p>
          </div>

          <div className="bg-pink-50 p-6 rounded-2xl shadow-md">
            <h2 className="text-xl font-semibold text-pink-600 mb-3">Poland 🇵🇱</h2>
            <p>Kings Street by West Bakery, Warsaw, Poland</p>
          </div>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            Contact Our Teams
          </h2>
          <p>📞 ASM Information Technology: +2347063364290 / 08072272271</p>
          <p>📞 Okikiola: +2348130571515</p>
          <p>📧 adebayonafisat77@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
