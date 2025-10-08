
'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Download, Eye, User, Phone, Mail, Calendar, Filter, Search } from 'lucide-react'

interface Resume {
  id: string
  applicantName: string
  email: string
  phone?: string
  position: string
  resumeUrl?: string
  status: string
  notes?: string
  createdAt: string
}

export function ResumeSection() {
  const [resumes, setResumes] = useState<Resume[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('all')
  const [positionFilter, setPositionFilter] = useState('all')

  useEffect(() => {
    fetchResumes()
  }, [])

  const fetchResumes = async () => {
    try {
      // Mock data for demonstration
      const mockResumes: Resume[] = [
        {
          id: '1',
          applicantName: 'Michael Rodriguez',
          email: 'michael.rodriguez@email.com',
          phone: '(214) 555-0123',
          position: 'Striping Technician',
          resumeUrl: '/resumes/michael-rodriguez.pdf',
          status: 'new',
          notes: '',
          createdAt: '2024-06-05T09:30:00Z'
        },
        {
          id: '2',
          applicantName: 'Jennifer Thompson',
          email: 'jennifer.thompson@email.com',
          phone: '(972) 555-0456',
          position: 'Project Manager',
          resumeUrl: '/resumes/jennifer-thompson.pdf',
          status: 'reviewed',
          notes: 'Strong background in construction management. Schedule interview.',
          createdAt: '2024-06-04T14:15:00Z'
        },
        {
          id: '3',
          applicantName: 'David Kim',
          email: 'david.kim@email.com',
          phone: '(469) 555-0789',
          position: 'Equipment Operator',
          resumeUrl: '/resumes/david-kim.pdf',
          status: 'interview',
          notes: 'Scheduled for interview on June 10th at 2 PM.',
          createdAt: '2024-06-03T11:20:00Z'
        },
        {
          id: '4',
          applicantName: 'Sarah Williams',
          email: 'sarah.williams@email.com',
          phone: '(214) 555-0321',
          position: 'Administrative Assistant',
          resumeUrl: '/resumes/sarah-williams.pdf',
          status: 'hired',
          notes: 'Excellent candidate. Start date: June 15th.',
          createdAt: '2024-06-01T16:45:00Z'
        },
        {
          id: '5',
          applicantName: 'Robert Johnson',
          email: 'robert.johnson@email.com',
          phone: '(972) 555-0654',
          position: 'Striping Technician',
          resumeUrl: '/resumes/robert-johnson.pdf',
          status: 'rejected',
          notes: 'Insufficient experience for the role.',
          createdAt: '2024-05-30T10:30:00Z'
        },
        {
          id: '6',
          applicantName: 'Lisa Chen',
          email: 'lisa.chen@email.com',
          phone: '(469) 555-0987',
          position: 'Sales Representative',
          resumeUrl: '/resumes/lisa-chen.pdf',
          status: 'new',
          notes: '',
          createdAt: '2024-05-29T13:15:00Z'
        }
      ]
      setResumes(mockResumes)
    } catch (error) {
      console.error('Error fetching resumes:', error)
    } finally {
      setLoading(false)
    }
  }

  const filteredResumes = resumes.filter(resume => {
    const matchesSearch = resume.applicantName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resume.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resume.position.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === 'all' || resume.status === statusFilter
    const matchesPosition = positionFilter === 'all' || resume.position === positionFilter
    return matchesSearch && matchesStatus && matchesPosition
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-100 text-blue-800'
      case 'reviewed':
        return 'bg-yellow-100 text-yellow-800'
      case 'interview':
        return 'bg-purple-100 text-purple-800'
      case 'hired':
        return 'bg-green-100 text-green-800'
      case 'rejected':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const stats = {
    total: resumes.length,
    new: resumes.filter(r => r.status === 'new').length,
    reviewed: resumes.filter(r => r.status === 'reviewed').length,
    interview: resumes.filter(r => r.status === 'interview').length,
    hired: resumes.filter(r => r.status === 'hired').length,
    rejected: resumes.filter(r => r.status === 'rejected').length
  }

  const positions = Array.from(new Set(resumes.map(r => r.position)))

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[...Array(5)].map((_, i) => (
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
        <h2 className="text-2xl font-bold text-gray-900">Resume Review Portal</h2>
        <div className="text-sm text-gray-600">
          {filteredResumes.length} of {resumes.length} applications
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-4 rounded-lg shadow-sm text-center"
        >
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
          <p className="text-sm text-gray-600">Total</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white p-4 rounded-lg shadow-sm text-center"
        >
          <p className="text-2xl font-bold text-blue-600">{stats.new}</p>
          <p className="text-sm text-gray-600">New</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-4 rounded-lg shadow-sm text-center"
        >
          <p className="text-2xl font-bold text-yellow-600">{stats.reviewed}</p>
          <p className="text-sm text-gray-600">Reviewed</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white p-4 rounded-lg shadow-sm text-center"
        >
          <p className="text-2xl font-bold text-purple-600">{stats.interview}</p>
          <p className="text-sm text-gray-600">Interview</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-4 rounded-lg shadow-sm text-center"
        >
          <p className="text-2xl font-bold text-green-600">{stats.hired}</p>
          <p className="text-sm text-gray-600">Hired</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="bg-white p-4 rounded-lg shadow-sm text-center"
        >
          <p className="text-2xl font-bold text-red-600">{stats.rejected}</p>
          <p className="text-sm text-gray-600">Rejected</p>
        </motion.div>
      </div>

      {/* Filters */}
      <div className="bg-white p-4 rounded-lg shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <input
                type="text"
                placeholder="Search applicants..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="new">New</option>
                <option value="reviewed">Reviewed</option>
                <option value="interview">Interview</option>
                <option value="hired">Hired</option>
                <option value="rejected">Rejected</option>
              </select>
            </div>
            <select
              value={positionFilter}
              onChange={(e) => setPositionFilter(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Positions</option>
              {positions.map(position => (
                <option key={position} value={position}>{position}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Resume Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {filteredResumes.length === 0 ? (
          <div className="lg:col-span-2 bg-white p-12 rounded-lg shadow-sm text-center text-gray-500">
            No resumes found matching your criteria.
          </div>
        ) : (
          filteredResumes.map((resume, index) => (
            <motion.div
              key={resume.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{resume.applicantName}</h3>
                    <p className="text-sm text-gray-600">{resume.position}</p>
                  </div>
                </div>
                <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(resume.status)}`}>
                  {resume.status.charAt(0).toUpperCase() + resume.status.slice(1)}
                </span>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Mail className="h-4 w-4" />
                  <span>{resume.email}</span>
                </div>
                {resume.phone && (
                  <div className="flex items-center space-x-2 text-sm text-gray-600">
                    <Phone className="h-4 w-4" />
                    <span>{resume.phone}</span>
                  </div>
                )}
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>Applied {new Date(resume.createdAt).toLocaleDateString()}</span>
                </div>
              </div>

              {resume.notes && (
                <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                  <p className="text-sm text-gray-700">{resume.notes}</p>
                </div>
              )}

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-700 text-sm">
                    <Eye className="h-4 w-4" />
                    <span>View</span>
                  </button>
                  {resume.resumeUrl && (
                    <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-700 text-sm">
                      <Download className="h-4 w-4" />
                      <span>Download</span>
                    </button>
                  )}
                </div>
                <div className="flex items-center space-x-2">
                  {resume.status === 'new' && (
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
                      Review
                    </button>
                  )}
                  {resume.status === 'reviewed' && (
                    <button className="bg-purple-600 text-white px-3 py-1 rounded text-sm hover:bg-purple-700">
                      Interview
                    </button>
                  )}
                  {(resume.status === 'interview' || resume.status === 'reviewed') && (
                    <>
                      <button className="bg-green-600 text-white px-3 py-1 rounded text-sm hover:bg-green-700">
                        Hire
                      </button>
                      <button className="bg-red-600 text-white px-3 py-1 rounded text-sm hover:bg-red-700">
                        Reject
                      </button>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
}
