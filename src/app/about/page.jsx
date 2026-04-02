import Link from "next/link";

export default function About() {
  return (
    <div className="left-0 w-full z-50 bg-[#C9A29A] gap-6 min-h-screen items-center justify-center">

      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-4 gap-6">
<h1 className="text-2xl sm:text-3xl md:text-5xl text-pink-700 mt-10">About Us</h1>
        <p className="text-xl sm:text-sm md:text-lg mb-6 text-gray-700 max-w-xl">
          At Issy’s Touch, we believe that true beauty is a blend of elegance, confidence, and individuality. <br />Founded with a passion for style and refinement, our mission is to empower every client to express themselves boldly while embracing their unique grace.<br />

We specialize in curating looks that speak of sophistication—whether it’s the delicate balance of femininity, <br />the commanding presence of power, or the subtle statement of understated glamour. Every detail matters to us, from the choice of fabrics and colors to the finishing touches that make a style unforgettable.

Our team of expert stylists and designers combines artistry with precision, <br />ensuring that each creation reflects both timeless elegance and contemporary trends. We don’t just dress you—we craft an experience, <br />a transformation that celebrates your essence.

With Issy’s Touch, style becomes more than appearance; it becomes confidence, poise, and an enduring impression.<br /> Let us guide you on a journey where elegance meets individuality, and sophistication is <br />IN EVERY DETAIL.
        </p>
        <Link
          href="/"
          className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-full transition"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}