import { Link } from "react-router";

export default function LoginUser() {
  return (
    <div className="min-h-screen bg-[#1C0B2B] text-white p-6">
        <Link
            to="/"
            className="bg-[#6F95FF] px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
            Volver a Home
        </Link>
        <Link
            to="/login/admin"
            className="bg-[#6F95FF] m-2 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 transition">
            Iniciar sesión como administrador
        </Link>
      <h1 className="text-3xl font-bold mt-4">Login Usuario</h1>
    </div>
  );
}