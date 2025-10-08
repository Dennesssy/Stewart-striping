
'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Send, Search, MoreVertical, Phone, Video, Paperclip } from 'lucide-react'

interface ChatMessage {
  id: string
  sender: string
  recipient: string
  message: string
  read: boolean
  createdAt: string
}

interface Contact {
  id: string
  name: string
  lastMessage: string
  timestamp: string
  unread: number
  online: boolean
}

export function ChatSection() {
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [contacts, setContacts] = useState<Contact[]>([])
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null)
  const [newMessage, setNewMessage] = useState('')
  const [loading, setLoading] = useState(true)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    fetchContacts()
    fetchMessages()
  }, [])

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const fetchContacts = async () => {
    try {
      // Mock data for demonstration
      const mockContacts: Contact[] = [
        {
          id: '1',
          name: 'John Smith - ABC Corp',
          lastMessage: 'When can you schedule the parking lot striping?',
          timestamp: '2 min ago',
          unread: 2,
          online: true
        },
        {
          id: '2',
          name: 'Sarah Johnson - Retail Plaza',
          lastMessage: 'Thank you for the quote!',
          timestamp: '1 hour ago',
          unread: 0,
          online: false
        },
        {
          id: '3',
          name: 'Mike Davis - Office Complex',
          lastMessage: 'Can we discuss the maintenance plan?',
          timestamp: '3 hours ago',
          unread: 1,
          online: true
        },
        {
          id: '4',
          name: 'Lisa Chen - Shopping Center',
          lastMessage: 'The work looks great! Invoice approved.',
          timestamp: 'Yesterday',
          unread: 0,
          online: false
        }
      ]
      setContacts(mockContacts)
      setSelectedContact(mockContacts[0])
    } catch (error) {
      console.error('Error fetching contacts:', error)
    } finally {
      setLoading(false)
    }
  }

  const fetchMessages = async () => {
    try {
      // Mock messages for demonstration
      const mockMessages: ChatMessage[] = [
        {
          id: '1',
          sender: 'John Smith - ABC Corp',
          recipient: 'Stewart Striping',
          message: 'Hi, I need a quote for parking lot striping for our office complex.',
          read: true,
          createdAt: new Date(Date.now() - 3600000).toISOString()
        },
        {
          id: '2',
          sender: 'Stewart Striping',
          recipient: 'John Smith - ABC Corp',
          message: 'Hello John! I\'d be happy to help. Can you tell me the size of the parking lot?',
          read: true,
          createdAt: new Date(Date.now() - 3500000).toISOString()
        },
        {
          id: '3',
          sender: 'John Smith - ABC Corp',
          recipient: 'Stewart Striping',
          message: 'It\'s approximately 50 parking spaces. We also need ADA compliance.',
          read: true,
          createdAt: new Date(Date.now() - 3400000).toISOString()
        },
        {
          id: '4',
          sender: 'Stewart Striping',
          recipient: 'John Smith - ABC Corp',
          message: 'Perfect! For 50 spaces with ADA compliance, I can provide a quote of $2,500. This includes all materials and labor.',
          read: true,
          createdAt: new Date(Date.now() - 3300000).toISOString()
        },
        {
          id: '5',
          sender: 'John Smith - ABC Corp',
          recipient: 'Stewart Striping',
          message: 'When can you schedule the parking lot striping?',
          read: false,
          createdAt: new Date(Date.now() - 120000).toISOString()
        }
      ]
      setMessages(mockMessages)
    } catch (error) {
      console.error('Error fetching messages:', error)
    }
  }

  const sendMessage = async () => {
    if (!newMessage.trim() || !selectedContact) return

    const message: ChatMessage = {
      id: Date.now().toString(),
      sender: 'Stewart Striping',
      recipient: selectedContact.name,
      message: newMessage,
      read: true,
      createdAt: new Date().toISOString()
    }

    setMessages(prev => [...prev, message])
    setNewMessage('')

    // Update contact's last message
    setContacts(prev => prev.map(contact => 
      contact.id === selectedContact.id 
        ? { ...contact, lastMessage: newMessage, timestamp: 'now' }
        : contact
    ))
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      sendMessage()
    }
  }

  const getFilteredMessages = () => {
    if (!selectedContact) return []
    return messages.filter(msg => 
      (msg.sender === selectedContact.name && msg.recipient === 'Stewart Striping') ||
      (msg.sender === 'Stewart Striping' && msg.recipient === selectedContact.name)
    )
  }

  if (loading) {
    return (
      <div className="h-96 bg-gray-100 rounded-lg animate-pulse flex items-center justify-center">
        <div className="text-gray-500">Loading messages...</div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Messages</h2>

      <div className="bg-white rounded-lg shadow-sm overflow-hidden" style={{ height: '600px' }}>
        <div className="flex h-full">
          {/* Contacts Sidebar */}
          <div className="w-1/3 border-r border-gray-200 flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {contacts.map((contact) => (
                <motion.div
                  key={contact.id}
                  whileHover={{ backgroundColor: '#f9fafb' }}
                  onClick={() => setSelectedContact(contact)}
                  className={`p-4 cursor-pointer border-b border-gray-100 ${
                    selectedContact?.id === contact.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {contact.name.charAt(0)}
                      </div>
                      {contact.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium text-gray-900 truncate">{contact.name}</p>
                        <p className="text-xs text-gray-500">{contact.timestamp}</p>
                      </div>
                      <p className="text-sm text-gray-600 truncate">{contact.lastMessage}</p>
                    </div>
                    {contact.unread > 0 && (
                      <div className="bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                        {contact.unread}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {selectedContact ? (
              <>
                {/* Chat Header */}
                <div className="p-4 border-b border-gray-200 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold">
                        {selectedContact.name.charAt(0)}
                      </div>
                      {selectedContact.online && (
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">{selectedContact.name}</p>
                      <p className="text-sm text-gray-500">
                        {selectedContact.online ? 'Online' : 'Last seen 2 hours ago'}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                      <Phone className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                      <Video className="h-5 w-5" />
                    </button>
                    <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                      <MoreVertical className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Messages */}
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {getFilteredMessages().map((message, index) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`flex ${message.sender === 'Stewart Striping' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.sender === 'Stewart Striping'
                            ? 'bg-blue-600 text-white'
                            : 'bg-gray-100 text-gray-900'
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'Stewart Striping' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {new Date(message.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                  <div ref={messagesEndRef} />
                </div>

                {/* Message Input */}
                <div className="p-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-lg">
                      <Paperclip className="h-5 w-5" />
                    </button>
                    <div className="flex-1">
                      <input
                        type="text"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>
                    <button
                      onClick={sendMessage}
                      disabled={!newMessage.trim()}
                      className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <Send className="h-5 w-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center text-gray-500">
                Select a conversation to start messaging
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
