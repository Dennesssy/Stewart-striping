
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  FileText, 
  Calendar, 
  DollarSign, 
  MessageSquare, 
  LogOut,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function ClientPortalPage() {
  const [userInfo, setUserInfo] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const authData = localStorage.getItem('stewart_auth')
    if (!authData) {
      router.push('/login?type=client')
      return
    }

    const auth = JSON.parse(authData)
    if (auth.type !== 'client') {
      router.push('/login?type=client')
      return
    }

    setUserInfo(auth)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('stewart_auth')
    router.push('/')
  }

  // Mock client data
  const clientData = {
    name: userInfo?.names?.[0] || 'Client',
    company: 'ABC Corporation',
    nextService: '2024-06-15',
    lastService: '2024-03-15',
    accountBalance: 0,
    totalSpent: 7500
  }

  const recentInvoices = [
    { id: 'INV-001', date: '2024-03-15', amount: 2500, status: 'paid', description: 'Quarterly parking lot maintenance' },
    { id: 'INV-002', date: '2024-12-15', amount: 1800, status: 'paid', description: 'Power washing service' },
    { id: 'INV-003', date: '2023-09-15', amount: 3200, status: 'paid', description: 'Full lot re-striping' },
  ]

  const upcomingServices = [
    { date: '2024-06-15', service: 'Quarterly Maintenance', time: '9:00 AM', status: 'scheduled' },
    { date: '2024-09-15', service: 'Fall Touch-up', time: 'TBD', status: 'pending' },
  ]

  const messages = [
    { id: 1, from: 'Stewart Striping', message: 'Your quarterly service is scheduled for June 15th. We\'ll arrive at 9 AM.', date: '2024-06-01', read: true },
    { id: 2, from: 'Stewart Striping', message: 'Thank you for your payment! Invoice INV-001 has been marked as paid.', date: '2024-03-16', read: true },
    { id: 3, from: 'Stewart Striping', message: 'Weather update: Service may be delayed due to rain. We\'ll keep you posted.', date: '2024-03-14', read: false },
  ]

  if (!userInfo) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Client Portal</h1>
              <div className="ml-4 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                {clientData.company}
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-600">
                Welcome, {clientData.name}
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors duration-200"
              >
                <LogOut className="h-4 w-4 mr-1" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white mb-8"
        >
          <h2 className="text-3xl font-bold mb-2">Welcome back, {clientData.name}!</h2>
          <p className="text-blue-100">
            Your next scheduled service is on {new Date(clientData.nextService).toLocaleDateString()}
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className="p-2 bg-green-100 rounded-lg">
                <Calendar className="h-6 w-6 text-green-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Next Service</p>
                <p className="text-lg font-bold text-gray-900">
                  {new Date(clientData.nextService).toLocaleDateString()}
                </p>
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
              <div className="p-2 bg-blue-100 rounded-lg">
                <Clock className="h-6 w-6 text-blue-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Last Service</p>
                <p className="text-lg font-bold text-gray-900">
                  {new Date(clientData.lastService).toLocaleDateString()}
                </p>
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
              <div className="p-2 bg-purple-100 rounded-lg">
                <DollarSign className="h-6 w-6 text-purple-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Account Balance</p>
                <p className="text-lg font-bold text-gray-900">${clientData.accountBalance}</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-sm"
          >
            <div className="flex items-center">
              <div className="p-2 bg-orange-100 rounded-lg">
                <FileText className="h-6 w-6 text-orange-600" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Spent</p>
                <p className="text-lg font-bold text-gray-900">${clientData.totalSpent.toLocaleString()}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Invoices */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Recent Invoices</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {recentInvoices.map((invoice) => (
                  <div key={invoice.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-gray-900">{invoice.id}</p>
                      <p className="text-sm text-gray-600">{invoice.description}</p>
                      <p className="text-sm text-gray-500">{new Date(invoice.date).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold text-gray-900">${invoice.amount.toLocaleString()}</p>
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        {invoice.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Upcoming Services */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-sm"
          >
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">Upcoming Services</h3>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {upcomingServices.map((service, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      {service.status === 'scheduled' ? (
                        <CheckCircle className="h-5 w-5 text-green-600" />
                      ) : (
                        <AlertCircle className="h-5 w-5 text-orange-600" />
                      )}
                      <div>
                        <p className="font-medium text-gray-900">{service.service}</p>
                        <p className="text-sm text-gray-600">{new Date(service.date).toLocaleDateString()}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-900">{service.time}</p>
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                        service.status === 'scheduled' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-orange-100 text-orange-800'
                      }`}>
                        {service.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Messages */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-8 bg-white rounded-lg shadow-sm"
        >
          <div className="p-6 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Recent Messages</h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`p-4 rounded-lg ${message.read ? 'bg-gray-50' : 'bg-blue-50'}`}>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-2">
                      <MessageSquare className="h-4 w-4 text-blue-600" />
                      <span className="font-medium text-gray-900">{message.from}</span>
                      {!message.read && (
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      )}
                    </div>
                    <span className="text-sm text-gray-500">{new Date(message.date).toLocaleDateString()}</span>
                  </div>
                  <p className="mt-2 text-gray-700">{message.message}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-8 bg-white rounded-lg shadow-sm p-6"
        >
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
              Request Service
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
              Pay Invoice
            </button>
            <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors duration-200">
              Send Message
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors duration-200">
              Download Reports
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
