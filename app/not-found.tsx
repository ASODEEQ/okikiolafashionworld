import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-r from-pink-100 via-white to-pink-200 px-4">
      {/* 404 Title */}
      <h1 className="text-[6rem] md:text-[8rem] font-extrabold text-pink-600 drop-shadow-lg">
        404
      </h1>

      {/* Message */}
      <p className="text-black-700 text-lg md:text-xl font-medium mb-6">
        Oops! The page you’re looking for doesn’t exist.
      </p>

      {/* Illustration or emoji */}
      <div className="text-5xl mb-6 animate-bounce">🛍️</div>

      {/* Go Home Button */}
      <Link
        href="/"
        className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white font-semibold rounded-full shadow-md transition-transform duration-300 hover:scale-105"
      >
        Go Back Home
      </Link>

      {/* Footer */}
      <p className="mt-10 text-xs text-gray-500">
        © {new Date().getFullYear()} OkikiolaFashionWorld
      </p>
    </div>
  );
};

export default NotFound;
