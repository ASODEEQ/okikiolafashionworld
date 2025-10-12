export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-28 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">Contact Us</h1>
        <p className="text-lg text-gray-800 mb-8">
          We’re always happy to hear from you! Reach out through any of the contact
          channels below or fill out the form to get in touch with us directly.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mt-10">
          <div className="bg-pink-50 rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-pink-600 mb-3">Nigeria 🇳🇬</h2>
            <p>Main Store: No 50, Akintunde House, Odi Olowo, Osogbo, Osun State</p>
            <p>Branch Store: No. 12, Oketunji Street, Alekuwodo, Osogbo</p>
          </div>

          <div className="bg-pink-50 rounded-2xl p-6 shadow-md">
            <h2 className="text-xl font-semibold text-pink-600 mb-3">Contact Details</h2>
            <p>📞 ASM Information Technology: +2347063364290 / 08072272271</p>
            <p>📞 Okikiola: +2348130571515</p>
            <p>📧 adebayonafisat77@gmail.com</p>
          </div>
        </div>

        {/* Simple Inquiry Form */}
        <form className="mt-14 max-w-xl mx-auto text-left bg-pink-50 p-8 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-center text-pink-600 mb-6">
            Send Us a Message
          </h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 outline-none"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
