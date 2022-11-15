import { Notifications } from 'components/Notifications'
import { UserAvatar } from 'components/UserAvatar/'
import { Bell, List, WarningCircle } from 'phosphor-react'

interface TopMenuProps {
  user?: string
  openMenu?: boolean
  showMenu: () => void
}

export function TopMenu({
  user = 'Rafael',
  openMenu = false,
  showMenu
}: TopMenuProps) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 bg-zinc-50 z-10 ${
        openMenu ? 'md:pl-52' : 'md:pl-20'
      }
      transition-all duration-500
      `}
    >
      <div className="flex items-center py-7 pl-4 pr-10 border-l ">
        <button className="md:hidden" onClick={showMenu}>
          <List size={32} />
        </button>
        <div className="flex-1">
          {/* <input
            type="text"
            placeholder="Buscar"
            className="px-2 py-1 rounded-lg w-80"
          /> */}
        </div>
        <div className="font-bold text-zinc-500/75 text-xl flex gap-4 items-center">
          <Notifications />
          {/* Olá, {user} */}
          <UserAvatar
            name="Rafael"
            email="rafaelcarmo143@gmail.com"
            avatar="/images/avatar.jpeg"
          />
        </div>
      </div>
    </div>
  )
}
