import { Link } from "react-router";
import MatchCard from "../components/MatchCard";
import logo from "../assets/logoFutPlayssdsd.png";
import logopequeno from "../assets/logopequeño.png";
import {Disclosure, DisclosureButton, DisclosurePanel,Menu, MenuButton, MenuItem, MenuItems} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

/* navegación principal */
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];

/* navegación del usuario */
const userNavigation = [
  { name: "Your profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

/* datos mock del usuario */
const user = {
  name: "FutPlay User",
  email: "usuario@futplay.com",
  imageUrl:
    "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=4&w=112&h=112&q=80",
};

/* helper para clases */
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  return (
    <>
      {/* NAVBAR */}
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              {/* lado izquierdo: logo + navegación desktop */}
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    alt="FutPlay"
                    src={logopequeno}
                    className="h-12 w-auto"
                  />
                </div>

                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-white/5 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* lado derecho desktop: login + campana + perfil */}
              <div className="hidden md:flex items-center gap-3">
                <Link
                  to="/login"
                  className="inline-block rounded-lg bg-[#936fad]/30 px-4 py-2 text-sm font-semibold hover:scale-105 hover:bg-[#7a5bbf] transition"
                >
                  Iniciar sesión
                </Link>

                <button
                  type="button"
                  className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Ver notificaciones</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>

                <Menu as="div" className="relative">
                  <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">Abrir menú de usuario</span>
                    <img
                      alt="Usuario"
                      src={user.imageUrl}
                      className="size-8 rounded-full outline -outline-offset-1 outline-white/10"
                    />
                  </MenuButton>

                  <MenuItems
                    transition
                    className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
                  >
                    {userNavigation.map((item) => (
                      <MenuItem key={item.name}>
                        <a
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:outline-hidden"
                        >
                          {item.name}
                        </a>
                      </MenuItem>
                    ))}
                  </MenuItems>
                </Menu>
              </div>

              {/* menú mobile: burger */}
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Abrir menú principal</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block size-6 group-data-open:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden size-6 group-data-open:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          {/* panel mobile desplegable */}
          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-white/5 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}

              {/* botón login mobile */}
              <div className="px-3 pt-2">
                <Link
                  to="/login"
                  className="inline-block rounded-lg bg-[#936fad]/30 px-4 py-2 text-sm font-semibold text-white hover:scale-105 hover:bg-[#7a5bbf] transition"
                >
                  Iniciar sesión
                </Link>
              </div>
            </div>

            {/* sección usuario mobile */}
            <div className="border-t border-white/10 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    alt="Usuario"
                    src={user.imageUrl}
                    className="size-10 rounded-full outline -outline-offset-1 outline-white/10"
                  />
                </div>

                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">
                    {user.name}
                  </div>
                  <div className="text-sm font-medium text-gray-400">
                    {user.email}
                  </div>
                </div>

                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Ver notificaciones</span>
                  <BellIcon aria-hidden="true" className="size-6" />
                </button>
              </div>

              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    href={item.href}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>
      </div>

      {/* CONTENIDO PRINCIPAL */}
      <div className="min-h-screen bg-[#1C0B2B] p-4 text-white">
        {/* header superior del home */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex min-w-0 items-center gap-3">
            <img
              src={logo}
              alt="FutPlay Logo"
              className="h-12 w-auto flex-shrink-0"
            />

            <div className="min-w-0">
              <p className="text-sm text-gray-300">Streaming de partidos</p>
              <p className="break-words text-base font-semibold text-gray-300">
                Liga Amateur Curacaví
              </p>

              <Link
                to="/login"
                className="mt-2 inline-block rounded-lg bg-[#936fad]/30 px-4 py-2 text-sm font-semibold hover:scale-105 hover:bg-[#7a5bbf] transition"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>

        {/* cards de partidos */}
        <div className="mt-6 space-y-4">
          <MatchCard
            status="EN VIVO"
            team1="Equipo A"
            team2="Equipo B"
            time="20:00"
            viewers="150"
          />

          <MatchCard
            status="PRÓXIMO"
            team1="Real Santiago"
            team2="Deportivo Sur"
            time="18:00"
            viewers="0"
          />

          <MatchCard
            status="FINALIZADO"
            team1="Atlético Norte"
            team2="Aguilas del 28"
            time="90:00"
            viewers="300"
          />
        </div>
      </div>
    </>
  );
}