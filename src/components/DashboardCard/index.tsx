interface DashboardCardProps {
  title?: string
  titleSize?: 'normal' | 'large'
  bgColor?: string
  children: React.ReactNode
}

export function DashboardCard({
  title,
  children,
  bgColor,
  titleSize = 'normal'
}: DashboardCardProps) {
  return (
    <section
      className={`w-full h-full rounded-xl shadow-lg p-12 ${bgColor} overflow-hidden`}
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
