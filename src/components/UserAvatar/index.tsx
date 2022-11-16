import { Popover, Transition } from '@headlessui/react'
import Image from 'next/legacy/image'
import { Gauge, GearSix, SignOut, UserCircle, Wrench } from 'phosphor-react'
import { Fragment } from 'react'

interface UserAvatarProps {
  name: string
  email: string
  avatar?: string
}

const solutions = [
  {
    name: 'Dashboard',
    description: '',
    href: '##',
    icon: <Gauge size={22} />
  },
  {
    name: 'Meus orçamentos',
    description: '',
    href: '##',
    icon: <Wrench size={22} />
  },
  {
    name: 'Configurações',
    description: '',
    href: '##',
    icon: <GearSix size={22} />
  }
]

export function UserAvatar({ name, email, avatar }: UserAvatarProps) {
  return (
    <div className="top-16 w-full max-w-sm px-4">
      <Popover className="relative z-40">
        <Popover.Button className="w-10 h-10 rounded-full overflow-hidden">
          {avatar ? (
            <div className="">
              <Image
                src={avatar}
                alt="avatar"
                width={10}
                height={10}
                layout="responsive"
                objectFit="cover"
              />
            </div>
          ) : (
            <UserCircle className="w-10 h-10" />
          )}
        </Popover.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-200"
          enterFrom="opacity-0 translate-y-1"
          enterTo="opacity-100 translate-y-0"
          leave="transition ease-in duration-150"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 translate-y-1"
        >
          <Popover.Panel className="absolute -left-28 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 ">
            <div className="overflow-hidden relative z-40  rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="relative flex flex-col gap-8 bg-white p-5">
                <div className="flex flex-col text-zinc-800">
                  <span className="font-semibold text-base">{name}</span>
                  <span className="font-thin text-base">{email}</span>
                  <hr />
                </div>
                {solutions.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center text-zinc-700 sm:h-12 sm:w-12">
                      {item.icon}
                    </div>
                    <div className="ml-4">
                      <p className="text-sm font-medium text-gray-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {item.description}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
              <div className="bg-gray-50 p-4">
                <a
                  href="##"
                  className="flow-root rounded-md px-2 py-2 transition duration-150 ease-in-out hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                >
                  <span className="flex items-center">
                    <span className="text-sm font-medium text-gray-900 flex gap-2">
                      <SignOut size={22} /> Logout
                    </span>
                  </span>
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>
    </div>
  )
}
