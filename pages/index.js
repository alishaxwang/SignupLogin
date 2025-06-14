import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-indigo-300 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-xl text-center">
        <h1 className="text-4xl font-bold text-indigo-700 mb-4">Welcome to My Auth App</h1>
        <p className="text-gray-700 mb-6 text-lg">
          This is a simple authentication app built with Next.js, TailwindCSS, and MongoDB.
        </p>
        <div className="flex justify-center gap-4">
          <button
            onClick={() => router.push('/auth/signup')}
            className="bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            Sign Up
          </button>
          <button
            onClick={() => router.push('/auth/login')}
            className="bg-white border border-indigo-600 text-indigo-600 px-6 py-2 rounded-lg hover:bg-indigo-50 transition"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}
