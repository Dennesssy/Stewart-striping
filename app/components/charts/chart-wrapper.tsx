
'use client'

import dynamic from 'next/dynamic'
import { ComponentType, Suspense } from 'react'

// Import Chart.js registration once
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

// Register all Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
)

// Chart Loading Component
const ChartLoading = () => (
  <div className="h-64 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
    <div className="text-gray-500">Loading chart...</div>
  </div>
)

// Dynamic imports with proper error boundaries
const LineChart = dynamic(
  () => import('react-chartjs-2').then((mod) => ({ default: mod.Line })),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  }
) as ComponentType<any>

const BarChart = dynamic(
  () => import('react-chartjs-2').then((mod) => ({ default: mod.Bar })),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  }
) as ComponentType<any>

const PieChart = dynamic(
  () => import('react-chartjs-2').then((mod) => ({ default: mod.Pie })),
  {
    ssr: false,
    loading: () => <ChartLoading />,
  }
) as ComponentType<any>

// Chart wrapper components with error handling
export const SafeLineChart = ({ data, options, ...props }: any) => {
  try {
    return (
      <Suspense fallback={<ChartLoading />}>
        <LineChart data={data} options={options} {...props} />
      </Suspense>
    )
  } catch (error) {
    console.error('Line chart error:', error)
    return (
      <div className="h-64 bg-red-50 rounded-lg flex items-center justify-center">
        <div className="text-red-500">Chart loading failed</div>
      </div>
    )
  }
}

export const SafeBarChart = ({ data, options, ...props }: any) => {
  try {
    return (
      <Suspense fallback={<ChartLoading />}>
        <BarChart data={data} options={options} {...props} />
      </Suspense>
    )
  } catch (error) {
    console.error('Bar chart error:', error)
    return (
      <div className="h-64 bg-red-50 rounded-lg flex items-center justify-center">
        <div className="text-red-500">Chart loading failed</div>
      </div>
    )
  }
}

export const SafePieChart = ({ data, options, ...props }: any) => {
  try {
    return (
      <Suspense fallback={<ChartLoading />}>
        <PieChart data={data} options={options} {...props} />
      </Suspense>
    )
  } catch (error) {
    console.error('Pie chart error:', error)
    return (
      <div className="h-64 bg-red-50 rounded-lg flex items-center justify-center">
        <div className="text-red-500">Chart loading failed</div>
      </div>
    )
  }
}
