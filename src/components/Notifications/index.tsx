import { Popover, Transition } from '@headlessui/react'
import { Bell, WarningCircle } from 'phosphor-react'
import { Fragment } from 'react'

interface NotificationsProps {}

export function Notifications({}: NotificationsProps) {
  return (
    <Popover className="relative">
      <Popover.Button className="w-10 h-10 flex items-center justify-center">
        <Bell size={25} />
        <WarningCircle
          size={15}
          className="text-red-500 absolute -bottom-1 -right-1"
          weight="fill"
        />
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
        <Popover.Panel className="bg-zinc-100 absolute left-0 z-10 mt-3 w-56 -translate-x-1/2 transform px-4 sm:px-0 rounded-lg overflow-y-auto">
          <div className="w-full h-40 flex items-center justify-center ">
            <span className="text-sm font-semibold">Nenhuma notificação</span>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}
