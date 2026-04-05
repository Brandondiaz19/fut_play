import { Link } from "react-router";

export default function LoginAdmin() {
  return (
    <div className="min-h-screen bg-[#1C0B2B] text-white p-6">
        <Link
            to="/login"
            className="bg-[#6F95FF] px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
            Volver a Login Usuario
        </Link>
      <Link
            to="/"
            className="bg-[#6F95FF] px-4 py-2 ml-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
            Volver a Home
        </Link>
      <h1 className="text-3xl font-bold mt-4">Login Administrador</h1>
    </div>
  );
}