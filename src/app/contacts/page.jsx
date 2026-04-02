import Link from "next/link";

export default function SignInPage() {
  return (
    <div className="min-h-screen bg-[#C9A29A] flex flex-col">
      
      <div className="flex flex-1 items-center justify-center px-4">
        <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-md">

          <h2 className="text-2xl font-bold text-center mb-4">
            Sign In
          </h2>

          <form className="space-y-4">

            <div>
              <label className="block mb-1">Name</label>
              <input
                type="text"
                className="w-full border p-2 rounded"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-1">Password</label>
              <input
                type="password"
                className="w-full border p-2 rounded"
                placeholder="Enter your password"
              />
            </div>

            <div>
              <label className="block mb-1">Email</label>
              <input
                type="email"
                className="w-full border p-2 rounded"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-1">Phone no.</label>
              <input
                type="tel"
                className="w-full border p-2 rounded"
                placeholder="Enter your phone number"
              />
            </div>

            <Link href="/">
              <button
                type="submit"
                className="w-full bg-pink-400 text-white p-2 rounded hover:bg-pink-500"
              >
                Sign In
              </button>
            </Link>

          </form>
        </div>
      </div>

    </div>
  );
}