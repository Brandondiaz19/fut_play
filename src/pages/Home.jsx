import { Link } from "react-router";
import MatchCard from "../components/MatchCard";
import logo from "../assets/logoFutPlayssdsd.png";
import logopequeno from "../assets/logopequeño.png";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
];

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

const user = {
  name: 'FutPlay User',
  email: 'usuario@futplay.com',
  imageUrl: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=facearea&facepad=4&w=112&h=112&q=80',
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <>
    <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="shrink-0">
                  <img
                    alt="Your Company"
                    src={logopequeno}
                    className="size-24 w-auto"
                  />
                </div>
                <div className="hidden md:block">
                <div className=<div className="hidden md:block">
  <div className="ml-4 flex items-center md:ml-6 gap-3">

    {/* BOTÓN LOGIN */}
    <Link
      to="/login"
      className="text-xs bg-[#936fad]/30 px-2 py-1 mt-10 rounded text-sm font-semibold hover:scale-105 hover:bg-[#7a5bbf] transition"
    >
      Iniciar sesión
    </Link>

    {/* ICONO NOTIFICACIÓN */}
    <button
      type="button"
      className="relative rounded-full p-1 text-gray-400 hover:text-white"
    >
      <BellIcon className="size-6" />
    </button>

    {/* PERFIL */}
    <Menu as="div" className="relative">
      ...
    </Menu>

  </div>
</div>>

                    {/* BOTÓN LOGIN */}
                    <Link
                    to="/login"
                    className="inline-block bg-[#936fad]/30 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 hover:bg-[#7a5bbf] transition mt-10"
                    >
                    Iniciar sesión
                    </Link>

                    {/* ICONO NOTIFICACIÓN */}
                    <button
                    type="button"
                    className="relative rounded-full p-1 text-gray-400 hover:text-white"
                    >
                    <BellIcon className="size-6" />
                    </button>

                    {/* PERFIL */}
                    <Menu as="div" className="relative">
                    ...
                    </Menu>

                </div>
                </div>
              </div>
                <Link
                to="/login"
                className="inline-block self-start sm:self-auto bg-[#936fad]/30 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 hover:bg-[#7a5bbf] transition mt-"
              >
                Iniciar sesión
              </Link>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="size-6" />
                  </button>

                  <Menu as="div" className="relative ml-3">
                    <MenuButton className="relative flex max-w-xs items-center rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img
                        alt=""
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
              </div>

              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
                  <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  aria-current={item.current ? 'page' : undefined}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white',
                    'block rounded-md px-3 py-2 text-base font-medium',
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 pb-3">
              <div className="flex items-center px-5">
                <div className="shrink-0">
                  <img
                    alt=""
                    src={user.imageUrl}
                    className="size-10 rounded-full outline -outline-offset-1 outline-white/10"
                  />
                </div>
                <div className="ml-3">
                  <div className="text-base/5 font-medium text-white">{user.name}</div>
                  <div className="text-sm font-medium text-gray-400">{user.email}</div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
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

      <div className="min-h-screen bg-[#1C0B2B] text-white p-4">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <img src={logo} alt="FutPlay Logo" className="h-50 w-auto flex-shrink-0" />
            <div className="min-w-0">
              <p className="text-sm text-gray-300">Streaming de partidos</p>
              <p className="text-base font-semibold text-gray-300 break-words">
                Liga Amateur Curacaví
              </p>
              <Link
                to="/login"
                className="inline-block self-start sm:self-auto bg-[#936fad]/30 px-4 py-2 rounded-lg text-sm font-semibold hover:scale-105 hover:bg-[#7a5bbf] transition"
              >
                Iniciar sesión
              </Link>
            </div>
          </div>
        </div>

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

