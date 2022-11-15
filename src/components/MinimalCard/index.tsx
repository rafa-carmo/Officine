import { TrendUp, TrendDown } from 'phosphor-react'
interface MinimalCardProps {
  title: string
  percentage: number
  value: number
}

export function MinimalCard({ title, percentage, value }: MinimalCardProps) {
  const trendUp = percentage > 0 ? true : false
  return (
    <section className={`w-full sm:max-w-sm rounded-xl shadow-lg p-5`}>
      <h3 className="font-bold">{title}</h3>
      <div className="flex items-center justify-between">
        <div className="gap-2 flex-col py-2">
          <div className="flex gap-2 py-2">
            <div
              className={`${
                trendUp ? 'bg-green-300/25' : 'bg-red-300/25'
              } w-fit p-1 rounded-full`}
            >
              {trendUp ? <TrendUp size={15} /> : <TrendDown size={15} />}
            </div>
            <span className="flex font-bold text-sm">
              {trendUp && '+'}
              {percentage}%
            </span>
          </div>
          <span className="font-bold text-lg pl-2">R$ {value},00</span>
        </div>

        <div>Icon</div>
      </div>
    </section>
  )
}
