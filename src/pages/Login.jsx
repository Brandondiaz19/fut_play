import { Link } from "react-router";
import logopequeno from "../assets/logopequeño.png";

export default function LoginUser() {
  return (
    <div className="min-h-screen bg-[#1C0B2B] text-white p-6">
        <Link
            to="/"
            className="inline-block bg-[#936fad]/30 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 hover:bg-[#936fad] transition">
            Volver a Home
        </Link>
        <Link
            to="/login/admin"
            className="inline-block bg-[#936fad]/30 m-2 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 hover:bg-[#936fad] transition">
            Iniciar sesión como administrador
        </Link>
      <h1 className="text-3xl font-bold mt-4">Login Usuario</h1>
    

      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="mx-auto w-full max-w-sm text-center">
            <img
              alt="Your Company"
              src={logopequeno}
              className="mx-auto h-32 w-auto"
            />
            <h2 className="text-center text-2xl/9 font-bold tracking-tight text-white">Inicia sesión con tu cuenta</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                  Correo Electrónico o Nombre de Usuario
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                    Contraseña
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-[#aa60db] hover:text-[#d0a9eb]">
                      ¿Olvidaste tu contraseña?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-[#936fad] px-3 py-1.5 text-sm/6 font-semibold cursor-pointer text-white hover:bg-[#7a5bbf] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Iniciar sesión
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-400">
              ¿Aún no tienes cuenta?{' '}
              <a href="#" className="font-semibold text-[#aa60db] hover:text-[#d0a9eb]">
                Regístrate aquí
              </a>
            </p>
          </div>
        </div>
    </div>
  );
}

