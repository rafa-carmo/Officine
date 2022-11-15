import { LateralMenu } from 'components/LateralMenu'
import { TopMenu } from 'components/TopMenu/index'
import { useState, useEffect, useRef } from 'react'
interface BaseProps {
  children: React.ReactNode
}
export function Base({ children }: BaseProps) {
  const [openMenu, setOpenMenu] = useState(false)

  return (
    <div className="relative h-screen overflow-hidden">
      <div
        className={`fixed z-20  min-h-screen flex flex-col transition-all duration-500 left-0 top-0 bottom-0 ${
          openMenu ? 'w-52' : 'w-20'
        }`}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <LateralMenu showText={openMenu} />
      </div>

      <TopMenu openMenu={openMenu} />

      <main
        className={`
        flex
        flex-col
        ${
          openMenu ? 'pl-52' : 'pl-20'
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
