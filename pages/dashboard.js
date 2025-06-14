import { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();

  // You can enhance this with real auth checking
  useEffect(() => {
    // If not authenticated, redirect to login
    // Example: check token in localStorage (optional)
    // if (!localStorage.getItem("token")) router.push("/auth/login");
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 to-green-300 flex items-center justify-center">
      <div className="bg-white p-10 rounded-xl shadow-md w-full max-w-2xl text-center">
        <h1 className="text-3xl font-bold text-green-700 mb-4">Welcome to Your Dashboard</h1>
        <p className="text-gray-700 text-lg">
          You’ve successfully logged in. 🎉<br />
          From here, you can customize your app, manage users, or start building new features.
        </p>
        <button
          onClick={() => router.push('/auth/login')}
          className="mt-6 inline-block bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition"
        >
          Log Out
        </button>
      </div>
    </div>
  );
}
