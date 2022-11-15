interface DashboardCardProps {
  title?: string
  titleSize?: 'normal' | 'large'
  bgColor?: string
  children: React.ReactNode
  scroll?: boolean
  className?: string
}

export function DashboardCard({
  title,
  children,
  bgColor,
  titleSize = 'normal',
  scroll = false,
  className
}: DashboardCardProps) {
  return (
    <section
      className={`w-full h-full rounded-xl shadow-lg p-12 ${bgColor} ${
        scroll ? 'overflow-y-auto' : 'overflow-hidden'
      } ${className}`}
    >
      <h3
        className={`font-bold ${
          titleSize === 'normal' ? 'text-lg' : 'text-2xl'
        }`}
      >
        {title}
      </h3>
      {children}
    </section>
  )
}
