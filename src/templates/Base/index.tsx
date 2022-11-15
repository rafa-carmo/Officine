import { LateralMenu } from 'components/LateralMenu'
import { TopMenu } from 'components/TopMenu/index'
import { useState, useEffect, useRef } from 'react'
interface BaseProps {
  children: React.ReactNode
}
export function Base({ children }: BaseProps) {
  const [openMenu, setOpenMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className={`relative h-screen overflow-hidden ${darkMode && 'dark'}`}>
      <div
        className={`fixed z-30  min-h-screen flex flex-col transition-all duration-500 md:left-0 top-0 bottom-0 ${
          openMenu ? 'w-52' : 'w-20'
        }
        ${showMenu ? 'left-0' : '-left-24'}
        `}
      >
        <LateralMenu
          showText={openMenu}
          openMenu={() => setOpenMenu(!openMenu)}
          showMenu={() => setShowMenu(false)}
        />
      </div>

      <TopMenu openMenu={openMenu} showMenu={() => setShowMenu(true)} />

      <main
        className={`
        flex
        flex-col
        ${
          openMenu ? 'md:pl-52' : 'md:pl-20'
        } mt-24 h-[calc(100vh-96px)] transition-all overflow-x-hidden overflow-y-auto duration-500`}
      >
        {children}
        <div className="w-full bg-zinc-200 text-center ">
          <span className="font-semibold text-xs">
            Todos os direitos reservados - Desenvolvido por - Rafael Carmo
          </span>
        </div>
      </main>
    </div>
  )
}
