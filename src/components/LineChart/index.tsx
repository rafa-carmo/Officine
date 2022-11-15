import type { ChartData, ChartOptions } from 'chart.js'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { useState } from 'react'
import { Line, Chart } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)
interface LineChartProps {}

interface LineProps {
  options: ChartOptions<'line'>
  data: ChartData<'line'>
}

const options: ChartOptions<'line'> = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const
    },
    title: {
      display: false
    }
  }
}

const labels = ['January', 'February', 'March', 'April']

const data: ChartData<'line'> = {
  labels,
  datasets: [
    {
      label: 'FATURAMENTO',
      data: [200, 500, 300, 550],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      tension: 0.3
    }
  ]
}
export function LineChart({}: LineChartProps) {
  return <Chart type="line" options={options} data={data} />
}
