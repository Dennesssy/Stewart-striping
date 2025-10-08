
'use client'

import { useState, useEffect, Suspense } from 'react'
import { motion } from 'framer-motion'
import { useRouter, useSearchParams } from 'next/navigation'
import { LogIn, User, Users, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

function LoginContent() {
  const [names, setNames] = useState(['', '', ''])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const searchParams = useSearchParams()
  const loginType = searchParams.get('type') || 'management'

  const validNames = ['Dennis', 'Dennis Jr', 'Malik', 'Kaiden']

  const handleInputChange = (index: number, value: string) => {
    const newNames = [...names]
    newNames[index] = value
    setNames(newNames)
    setError('')
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    // Filter out empty names
    const enteredNames = names.filter(name => name.trim() !== '')
    
    if (enteredNames.length === 0) {
      setError('Please enter at least one name')
      setLoading(false)
      return
    }

    // Check if all entered names are valid
    const invalidNames = enteredNames.filter(name => !validNames.includes(name.trim()))
    
    if (invalidNames.length > 0) {
      setError(`Invalid name(s): ${invalidNames.join(', ')}`)
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          names: enteredNames,
          type: loginType
        }),
      })

      const data = await response.json()

      if (response.ok) {
        // Store login info in localStorage
        localStorage.setItem('stewart_auth', JSON.stringify({
          names: enteredNames,
          type: loginType,
          timestamp: Date.now()
        }))
        
        // Redirect based on login type
        if (loginType === 'management') {
          router.push('/dashboard')
        } else {
          router.push('/client-portal')
        }
      } else {
        setError(data.error || 'Login failed')
      }
    } catch (error) {
      setError('Network error. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-md w-full"
      >
        {/* Back to Home */}
        <Link
          href="/"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8 transition-colors duration-200"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="bg-blue-100 rounded-full p-3 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              {loginType === 'management' ? (
                <Users className="h-8 w-8 text-blue-600" />
              ) : (
                <User className="h-8 w-8 text-blue-600" />
              )}
            </div>
            <h1 className="text-2xl font-bold text-gray-900 mb-2">
              {loginType === 'management' ? 'Management Login' : 'Client Login'}
            </h1>
            <p className="text-gray-600">
              Enter authorized names to access the {loginType === 'management' ? 'dashboard' : 'client portal'}
            </p>
          </div>

          {/* Login Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Authorized Names (enter up to 3)
              </label>
              
              {names.map((name, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    placeholder={`Name ${index + 1} (optional)`}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </motion.div>
              ))}
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg"
              >
                {error}
              </motion.div>
            )}

            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              {loading ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              ) : (
                <>
                  <LogIn className="h-5 w-5 mr-2" />
                  Access {loginType === 'management' ? 'Dashboard' : 'Portal'}
                </>
              )}
            </motion.button>
          </form>

          {/* Valid Names Hint */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-600 mb-2">
              <strong>Valid names:</strong>
            </p>
            <div className="flex flex-wrap gap-2">
              {validNames.map((validName) => (
                <span
                  key={validName}
                  className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                >
                  {validName}
                </span>
              ))}
            </div>
          </div>

          {/* Switch Login Type */}
          <div className="mt-6 text-center">
            <Link
              href={`/login?type=${loginType === 'management' ? 'client' : 'management'}`}
              className="text-blue-600 hover:text-blue-700 text-sm transition-colors duration-200"
            >
              Switch to {loginType === 'management' ? 'Client' : 'Management'} Login
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

export default function LoginPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    }>
      <LoginContent />
    </Suspense>
  )
}
