
'use client'

import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageSquare } from 'lucide-react'
import { ContactForm } from '@/components/contact-form'
import Image from 'next/image'

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: "(555) 123-STRIPE",
      subtitle: "Call us for immediate assistance"
    },
    {
      icon: Mail,
      title: "Email",
      details: "info@stewartstriping.com",
      subtitle: "Send us your questions anytime"
    },
    {
      icon: MapPin,
      title: "Service Area",
      details: "North Texas Region",
      subtitle: "Dallas, Fort Worth & surrounding areas"
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: "Mon-Fri: 7AM-6PM",
      subtitle: "Emergency services available"
    }
  ]

  const serviceAreas = [
    "Dallas", "Fort Worth", "Plano", "Irving", "Arlington", "Garland",
    "Mesquite", "Richardson", "Carrollton", "Frisco", "McKinney", "Allen"
  ]

  return (
    <div className="min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Get in <span className="text-blue-600">Touch</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Ready to transform your parking lot? Contact Stewart Striping today for a free consultation and quote. We're here to help your business look its best.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Details */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 * index }}
                    className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="bg-blue-600 rounded-lg p-3">
                      <info.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{info.title}</h3>
                      <p className="text-blue-600 font-medium">{info.details}</p>
                      <p className="text-gray-600 text-sm">{info.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Service Areas */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-6 bg-blue-50 rounded-lg"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Service Areas</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 text-gray-700">
                  {serviceAreas.map((area, index) => (
                    <div key={area} className="flex items-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                      {area}
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Service Area</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly serve businesses throughout the North Texas region with professional parking lot services.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-xl bg-gray-200"
          >
            <Image
              src="/images/contact/contact-header.jpg"
              alt="Stewart Striping service area map covering North Texas"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Happy Customers</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See our recent work and satisfied customers across North Texas. Follow us for more updates!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 1,
                image: "/images/contact/instagram-1.png",
                caption: "ABC Corp's parking lot transformation! 50 spaces with ADA compliance ✨ #ParkingLotStriping #NorthTexas",
                likes: 47,
                comments: 8,
                timeAgo: "2 days ago"
              },
              {
                id: 2,
                image: "/images/services/striping-youtube.jpg",
                caption: "Before & After at Retail Plaza! Amazing transformation 🎯 #BeforeAndAfter #ProfessionalStriping",
                likes: 63,
                comments: 12,
                timeAgo: "4 days ago"
              },
              {
                id: 3,
                image: "/images/automation/email-automation.jpg",
                caption: "Our team in action at Office Complex! Precision and quality in every line 💪 #TeamWork #Quality",
                likes: 35,
                comments: 5,
                timeAgo: "1 week ago"
              },
              {
                id: 4,
                image: "/images/automation/lead-capture.jpg",
                caption: "Another satisfied customer! Thank you Shopping Center Inc for trusting us 🤝 #CustomerSatisfaction",
                likes: 52,
                comments: 9,
                timeAgo: "1 week ago"
              },
              {
                id: 5,
                image: "/images/services/power-washing-detail.jpg",
                caption: "Aerial view of our latest project - 120 spaces perfectly aligned! 🚁 #AerialView #PerfectLines",
                likes: 89,
                comments: 15,
                timeAgo: "2 weeks ago"
              },
              {
                id: 6,
                image: "/images/services/ada-signage.png",
                caption: "ADA compliance is our priority! Proper accessibility for everyone 🅿️ #ADACompliant #Accessibility",
                likes: 41,
                comments: 7,
                timeAgo: "2 weeks ago"
              }
            ].map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
              >
                <div className="relative aspect-square bg-gray-200">
                  <Image
                    src={post.image}
                    alt={`Stewart Striping Instagram post ${post.id}`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-gray-800 mb-3">{post.caption}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center space-x-4">
                      <span>❤️ {post.likes}</span>
                      <span>💬 {post.comments}</span>
                    </div>
                    <span>{post.timeAgo}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-center mt-8"
          >
            <a
              href="https://instagram.com/stewartstriping"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Follow @stewartstriping
            </a>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <MessageSquare className="h-16 w-16 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-4">Need Emergency Service?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We understand that sometimes you need immediate assistance. Contact us for emergency parking lot services and rapid response solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:5551234567"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              >
                Call Emergency Line
              </a>
              <a
                href="mailto:emergency@stewartstriping.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-300"
              >
                Email Emergency Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
