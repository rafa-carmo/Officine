// import { LateralMenu } from 'components/LateralMenu'
import { House, Users, List, Gear, Wrench, ArrowLeft } from 'phosphor-react'

interface LateralMenuProps {
  showText: boolean
  openMenu: () => void
  showMenu: () => void
}

const menuItems = [
  {
    name: 'Home',
    icon: <House size={22} weight="fill" />,
    url: '#'
  },
  {
    name: 'Orçamentos',
    icon: <Wrench size={22} />,
    url: '#'
  },
  {
    name: 'Clientes',
    icon: <Users size={22} />,
    url: '#'
  },
  {
    name: 'Configurações',
    icon: <Gear size={22} />,
    url: '#'
  }
]

export function LateralMenu({
  showText,
  openMenu,
  showMenu
}: LateralMenuProps) {
  const selected = 'Home'
  return (
    <div className="flex flex-col bg-gradient-to-b from-sky-500 to-sky-900 h-screen text-zinc-100">
      <div className="h-24 overflow-hidden">
        <div
          className="hidden md:flex items-center justify-start h-full px-6 w-44 gap-7 cursor-default"
          onClick={openMenu}
        >
          <List size={32} />
          {process.env.NEXT_PUBLIC_APP_NAME
            ? process.env.NEXT_PUBLIC_APP_NAME
            : 'Dashboard'}
        </div>
        <div
          className="flex md:hidden items-center justify-start h-full px-6 w-44 gap-7 cursor-default"
          onClick={showMenu}
        >
          <ArrowLeft size={32} />
          {process.env.NEXT_PUBLIC_APP_NAME
            ? process.env.NEXT_PUBLIC_APP_NAME
            : 'Dashboard'}
        </div>
      </div>
      <div className="flex flex-1 pt-20 w-full ">
        <nav className="w-full overflow-hidden">
          <ul className="flex flex-col gap-3">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.url}
                className={`transition-colors ${
                  selected === item.name
                    ? 'bg-sky-300/25'
                    : 'hover:text-zinc-400'
                }`}
              >
                <li className="w-72 px-6 py-4 flex items-center justify-start gap-10">
                  {item.icon} <span>{item.name}</span>
                </li>
              </a>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}
