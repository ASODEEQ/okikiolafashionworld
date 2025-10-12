export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-black pt-28 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-pink-600 mb-6">About Us</h1>
        <p className="text-lg leading-relaxed text-gray-800">
          <strong>Okikiola Fashion World (OFW)</strong> is a global fashion brand
          that connects cultures through elegant designs and high-quality fashion
          products. With roots in Nigeria 🇳🇬, a strong sourcing base in China 🇨🇳,
          and a growing presence in Poland 🇵🇱, we specialize in stylish clothing,
          accessories, and lifestyle essentials that inspire confidence and beauty.
        </p>

        <p className="mt-6 text-lg leading-relaxed text-gray-800">
          We believe fashion should be both timeless and expressive. That’s why our
          collections blend traditional craftsmanship with modern creativity. From
          everyday wear to premium looks, we make sure you feel unique and confident
          in every outfit.
        </p>

        <div className="mt-12">
          <h2 className="text-2xl font-semibold text-pink-600 mb-3">
            Our Vision
          </h2>
          <p className="text-gray-800">
            To become Africa’s most trusted global fashion brand, delivering beauty,
            quality, and culture across continents.
          </p>

          <h2 className="text-2xl font-semibold text-pink-600 mt-10 mb-3">
            Our Mission
          </h2>
          <p className="text-gray-800">
            To empower people through fashion, by providing high-quality, affordable,
            and trend-forward clothing sourced ethically from around the world.
          </p>
        </div>

        <div className="mt-16">
          <h3 className="text-xl font-semibold text-pink-600 mb-2">
            Follow Our Journey
          </h3>
          <p className="text-gray-800">
            Stay connected for our latest drops and global updates.
          </p>
          <div className="mt-4 flex justify-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=100063646616466"
              target="_blank"
              className="text-pink-600 hover:text-pink-800 transition"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/okikiolafashionstore?igsh=MXZ0ZGlzeGUxcDBpZA=="
              target="_blank"
              className="text-pink-600 hover:text-pink-800 transition"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
