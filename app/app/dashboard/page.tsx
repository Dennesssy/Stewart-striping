
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { 
  BarChart3, 
  FileText, 
  MessageSquare, 
  DollarSign, 
  CheckSquare, 
  Mail, 
  Users,
  LogOut,
  TrendingUp,
  Calendar,
  AlertCircle
} from 'lucide-react'
import { AnalyticsSection } from '@/components/dashboard/analytics-section'
import { InvoicesSection } from '@/components/dashboard/invoices-section'
import { ChatSection } from '@/components/dashboard/chat-section'
import { RevenueSection } from '@/components/dashboard/revenue-section'
import { TasksSection } from '@/components/dashboard/tasks-section'
import { EmailSignupsSection } from '@/components/dashboard/email-signups-section'
import { ResumeSection } from '@/components/dashboard/resume-section'

export default function DashboardPage() {
  const [activeSection, setActiveSection] = useState('analytics')
  const [userInfo, setUserInfo] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    // Check authentication
    const authData = localStorage.getItem('stewart_auth')
    if (!authData) {
      router.push('/login?type=management')
      return
    }

    const auth = JSON.parse(authData)
    if (auth.type !== 'management') {
      router.push('/login?type=management')
      return
    }

    setUserInfo(auth)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('stewart_auth')
    router.push('/')
  }

  const menuItems = [
    { id: 'analytics', label: 'Analytics', icon: BarChart3, color: 'text-blue-600' },
    { id: 'invoices', label: 'Invoices', icon: FileText, color: 'text-green-600' },
    { id: 'chat', label: 'Messages', icon: MessageSquare, color: 'text-purple-600' },
    { id: 'revenue', label: 'Revenue', icon: DollarSign, color: 'text-emerald-600' },
    { id: 'tasks', label: 'Tasks', icon: CheckSquare, color: 'text-orange-600' },
    { id: 'emails', label: 'Email Signups', icon: Mail, color: 'text-pink-600' },
    { id: 'resumes', label: 'Resumes', icon: Users, color: 'text-indigo-600' },
  ]

  if (!userInfo) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  const renderActiveSection = () => {
    switch (activeSection) {
      case 'analytics':
        return <AnalyticsSection />
      case 'invoices':
        return <InvoicesSection />
      case 'chat':
        return <ChatSection />
      case 'revenue':
        return <RevenueSection />
      case 'tasks':
        return <TasksSection />
      case 'emails':
        return <EmailSignupsSection />
      case 'resumes':
        return <ResumeSection />
      default:
        return <AnalyticsSection />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center">
                  <BarChart3 className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h1 className="text-xl font-bold text-gray-900 leading-tight">Stewart Striping</h1>
                  <p className="text-xs text-gray-500">Management Dashboard</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="text-sm text-gray-600 hidden sm:block">
                Welcome, <span className="font-medium text-gray-900">{userInfo.names.join(', ')}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all duration-200"
              >
                <LogOut className="h-4 w-4" />
                <span className="hidden sm:inline">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <div className="w-64 flex-shrink-0">
            <nav className="bg-white rounded-lg shadow-sm p-4">
              <div className="space-y-2">
                {menuItems.map((item) => {
                  const Icon = item.icon
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => setActiveSection(item.id)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full flex items-center px-4 py-3 rounded-lg text-left transition-all duration-200 ${
                        activeSection === item.id
                          ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-600'
                          : 'text-gray-700 hover:bg-gray-50'
                      }`}
                    >
                      <Icon className={`h-5 w-5 mr-3 ${activeSection === item.id ? 'text-blue-600' : item.color}`} />
                      {item.label}
                    </motion.button>
                  )
                })}
              </div>
            </nav>

            {/* Quick Stats */}
            <div className="mt-6 bg-white rounded-lg shadow-sm p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Stats</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Today's Visitors</span>
                  <span className="font-semibold text-blue-600">127</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Pending Tasks</span>
                  <span className="font-semibold text-orange-600">8</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">New Messages</span>
                  <span className="font-semibold text-purple-600">3</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Monthly Revenue</span>
                  <span className="font-semibold text-green-600">$12,450</span>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              {renderActiveSection()}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}
