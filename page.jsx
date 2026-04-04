import Link from "next/link";

const Home = () => {
  return (
    <div className="w-full bg-[#C9A29A]">
     
      <div
        className="relative min-h-screen flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: "url('/hanger.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative text-center text-white px-6 max-w-2xl">
<h1 className="text-2xl sm:text-3xl md:text-6xl">
            Issy's Touch
          </h1>
          <p className="text-base sm:text-lg md:text-xl mb-8">
            A touch of Beauty and Sophistication
          </p>

          <Link href="/urstyle">
            <button className="bg-pink-500 hover:bg-pink-600 transition duration-300 px-6 py-3 sm:px-8 rounded-full text-base sm:text-lg font-semibold shadow-lg">
              Choose Your Style
            </button>
          </Link>
        </div>
      </div>
<div className="flex flex-row max-w-7xl mx-auto items-center py-10 px-6 gap-2 sm:gap-6 text-xs sm:text-base md:text-2xl">
        <div className="w-1/2">
          <img
            src="/cap.jpg"
            width={500}
            height={400}
            alt="Cap"
            className="rounded-2xl w-full h-auto"
          />
        </div>

        <div className="w-1/2 text-sm sm:text-2xl md:text-2xl font-bold text-white  text-left">
          <p>
            Let us help you. Do you want feminine or powerful?
            <br />
            Lover or fighter? In all colours... We have
            <br />
            IT ALL.
            <br />
            So let's dress you up and make
            <br />
            you into the queen you are.
          </p>
        </div>
      </div>
      <div className="flex flex-row max-w-7xl mx-auto items-center py-10 px-6 gap-2 sm:gap-6 text-xs sm:text-base md:text-2xl">
        <div className="w-1/2 text-sm sm:text-2xl md:text-2xl font-bold text-white  text-left">
          <p>You could be a boss. You could be unstoppable.</p>
        </div>

                <div className="w-1/2">
          <img
            src="/LOVE.jpg"
            width={500}
            height={400}
            alt="Love"
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </div>
      <footer className="bg-pink-500">
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto justify-between py-8 px-6 text-amber-100 gap-6 text-center md:text-left">
          <div>
            <p>
              <strong>Address:</strong><br />
              12 Pink street, Isheri-Oshun, Oke-Afa, Ejigbo, Lagos state, Nigeria
            </p>
          </div>

          <div>
            <p>
              <strong>Contact:</strong><br />
              09055673452, 08066547356, 08044354122
            </p>
          </div>

          <div>
            <p>
              <strong>Complaints?</strong><br />
              Contact us on WhatsApp:<br />
              07089546734, 09021888651, 08076432118
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default Home;