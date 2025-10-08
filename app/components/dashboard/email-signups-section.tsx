
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, TrendingUp, Download, Search, Filter, Calendar, Users } from 'lucide-react'
import dynamic from 'next/dynamic'

const Chart = dynamic(() => import('react-chartjs-2').then(mod => mod.Line), {
  ssr: false,
  loading: () => <div className="h-64 bg-gray-100 rounded-lg animate-pulse"></div>
})

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

interface EmailSignup {
  id: string
  email: string
  source?: string
  status: string
  createdAt: string
}

export function EmailSignupsSection() {
  const [signups, setSignups] = useState<EmailSignup[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [sourceFilter, setSourceFilter] = useState('all')

  useEffect(() => {
    fetchEmailSignups()
  }, [])

  const fetchEmailSignups = async () => {
    try {
      // Mock data for demonstration
      const mockSignups: EmailSignup[] = [
        {
          id: '1',
          email: 'john.smith@abccorp.com',
          source: 'contact-form',
          status: 'active',
          createdAt: '2024-06-05T10:30:00Z'
        },
        {
          id: '2',
          email: 'sarah.johnson@retailplaza.com',
          source: 'newsletter',
          status: 'active',
          createdAt: '2024-06-04T14:20:00Z'
        },
        {
          id: '3',
          email: 'mike.davis@officecomplex.com',
          source: 'quote-request',
          status: 'active',
          createdAt: '2024-06-03T09:15:00Z'
        },
        {
          id: '4',
          email: 'lisa.chen@shopping.com',
          source: 'contact-form',
          status: 'active',
          createdAt: '2024-06-02T16:45:00Z'
        },
        {
          id: '5',
          email: 'robert.wilson@warehouse.com',
          source: 'newsletter',
          status: 'unsubscribed',
          createdAt: '2024-06-01T11:30:00Z'
        },
        {
          id: '6',
          email: 'jennifer.brown@mall.com',
          source: 'quote-request',
          status: 'active',
          createdAt: '2024-05-31T13:20:00Z'
        },
        {
          id: '7',
          email: 'david.taylor@plaza.com',
          source: 'contact-form',
          status: 'active',
          createdAt: '2024-05-30T08:10:00Z'
        }
      ]
      setSignups(mockSignups)
    } catch (error) {
      console.error('Error fetching email signups:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredSignups = signups.filter(signup => {
    const matchesSearch = signup.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSource = sourceFilter === 'all' || signup.source === sourceFilter
    return matchesSearch && matchesSource
  })

  const signupChartData = {
    labels: ['May 25', 'May 27', 'May 29', 'May 31', 'Jun 2', 'Jun 4', 'Jun 6'],
    datasets: [
      {
        label: 'Email Signups',
        data: [2, 4, 3, 5, 7, 6, 8],
        borderColor: 'rgb(59, 130, 246)',
        backgroundColor: 'rgba(59, 130, 246, 0.1)',
        tension: 0.4,
      },
    ],
  }

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  }

  const getSourceColor = (source: string) => {
    switch (source) {
      case 'contact-form':
        return 'bg-blue-100 text-blue-800'
      case 'newsletter':
        return 'bg-green-100 text-green-800'
      case 'quote-request':
        return 'bg-purple-100 text-purple-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800'
      case 'unsubscribed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const stats = {
    total: signups.length,
    active: signups.filter(s => s.status === 'active').length,
    thisWeek: signups.filter(s => {
      const signupDate = new Date(s.createdAt)
      const weekAgo = new Date()
      weekAgo.setDate(weekAgo.getDate() - 7)
      return signupDate >= weekAgo
    }).length,
    conversionRate: 15.3 // Mock conversion rate
  }

  const sourceBreakdown = {
    'contact-form': signups.filter(s => s.source === 'contact-form').length,
    'newsletter': signups.filter(s => s.source === 'newsletter').length,
    'quote-request': signups.filter(s => s.source === 'quote-request').length,
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Email Signups</h2>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center">
          <Download className="h-4 w-4 mr-2" />
          Export List
        </button>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center">
            <div className="p-2 bg-blue-100 rounded-lg">
              <Users className="h-6 w-6 text-blue-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Total Signups</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center">
            <div className="p-2 bg-green-100 rounded-lg">
              <Mail className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Active Subscribers</p>
              <p className="text-2xl font-bold text-gray-900">{stats.active}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center">
            <div className="p-2 bg-purple-100 rounded-lg">
              <Calendar className="h-6 w-6 text-purple-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">This Week</p>
              <p className="text-2xl font-bold text-gray-900">{stats.thisWeek}</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <div className="flex items-center">
            <div className="p-2 bg-orange-100 rounded-lg">
              <TrendingUp className="h-6 w-6 text-orange-600" />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-600">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Chart and Source Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Signup Trend</h3>
          <Chart data={signupChartData} options={chartOptions} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-6 rounded-lg shadow-sm"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Signup Sources</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Contact Form</span>
              </div>
              <span className="font-semibold text-gray-900">{sourceBreakdown['contact-form']}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Newsletter</span>
              </div>
              <span className="font-semibold text-gray-900">{sourceBreakdown['newsletter']}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-600">Quote Request</span>
              </div>
              <span className="font-semibold text-gray-900">{sourceBreakdown['quote-request']}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search email addresses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-400" />
            <select
              value={sourceFilter}
              onChange={(e) => setSourceFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Sources</option>
              <option value="contact-form">Contact Form</option>
              <option value="newsletter">Newsletter</option>
              <option value="quote-request">Quote Request</option>
            </select>
          </div>
        </div>
      </div>

      {/* Email List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="bg-white rounded-lg shadow-sm overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Email Address
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Source
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Signup Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredSignups.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    No email signups found.
                  </td>
                </tr>
              ) : (
                filteredSignups.map((signup, index) => (
                  <motion.tr
                    key={signup.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{signup.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getSourceColor(signup.source || '')}`}>
                        {signup.source?.replace('-', ' ').charAt(0).toUpperCase() + (signup.source?.replace('-', ' ').slice(1) || '')}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(signup.status)}`}>
                        {signup.status.charAt(0).toUpperCase() + signup.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {new Date(signup.createdAt).toLocaleDateString()}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <button className="text-blue-600 hover:text-blue-900 mr-3">
                        Email
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        Remove
                      </button>
                    </td>
                  </motion.tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  )
}
