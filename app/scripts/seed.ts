
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  console.log('Seeding database...')

  // Hash passwords
  const managementPassword = await bcrypt.hash('management123', 10)
  const clientPassword = await bcrypt.hash('client123', 10)

  // Create management user
  const managementUser = await prisma.user.upsert({
    where: { email: 'admin@stewartstriping.com' },
    update: {},
    create: {
      email: 'admin@stewartstriping.com',
      name: 'Stewart Striping Admin',
      password: managementPassword,
      type: 'management',
    },
  })

  // Create client user
  const clientUser = await prisma.user.upsert({
    where: { email: 'client@example.com' },
    update: {},
    create: {
      email: 'client@example.com',
      name: 'Demo Client',
      password: clientPassword,
      type: 'client',
    },
  })

  // Create another management user
  const manager2 = await prisma.user.upsert({
    where: { email: 'manager@stewartstriping.com' },
    update: {},
    create: {
      email: 'manager@stewartstriping.com',
      name: 'Stewart Manager',
      password: managementPassword,
      type: 'management',
    },
  })

  // Create another client user
  const client2 = await prisma.user.upsert({
    where: { email: 'john.doe@company.com' },
    update: {},
    create: {
      email: 'john.doe@company.com',
      name: 'John Doe',
      password: clientPassword,
      type: 'client',
    },
  })

  console.log('Users created:')
  console.log('Management Users:')
  console.log('- Email: admin@stewartstriping.com, Password: management123, Type: management')
  console.log('- Email: manager@stewartstriping.com, Password: management123, Type: management')
  console.log('Client Users:')
  console.log('- Email: client@example.com, Password: client123, Type: client')
  console.log('- Email: john.doe@company.com, Password: client123, Type: client')

  // Create some sample data for the CRM dashboard
  
  // Sample invoices
  await prisma.invoice.createMany({
    data: [
      {
        clientName: 'ABC Corporation',
        amount: 2500.00,
        description: 'Parking lot striping - Main facility',
        status: 'paid',
        dueDate: new Date('2024-01-15'),
      },
      {
        clientName: 'XYZ Shopping Center',
        amount: 4200.00,
        description: 'Complete parking lot restriping and power washing',
        status: 'pending',
        dueDate: new Date('2024-02-01'),
      },
      {
        clientName: 'City Mall',
        amount: 1800.00,
        description: 'Handicap spaces and fire lane striping',
        status: 'overdue',
        dueDate: new Date('2024-01-10'),
      },
    ],
    skipDuplicates: true,
  })

  // Sample tasks
  await prisma.task.createMany({
    data: [
      {
        title: 'Quote for downtown office complex',
        description: 'Site visit and quote preparation for 500-space parking lot',
        priority: 'high',
        status: 'pending',
        dueDate: new Date('2024-01-30'),
        assignedTo: 'Stewart Team',
      },
      {
        title: 'Equipment maintenance',
        description: 'Monthly maintenance check on striping equipment',
        priority: 'medium',
        status: 'in-progress',
        dueDate: new Date('2024-01-25'),
        assignedTo: 'Maintenance Crew',
      },
      {
        title: 'Follow up with ABC Corp',
        description: 'Check if additional services are needed',
        priority: 'low',
        status: 'completed',
        dueDate: new Date('2024-01-20'),
        assignedTo: 'Sales Team',
      },
    ],
    skipDuplicates: true,
  })

  // Sample chat messages
  await prisma.chatMessage.createMany({
    data: [
      {
        sender: 'admin@stewartstriping.com',
        recipient: 'client@example.com',
        message: 'Hi! Your parking lot striping is scheduled for next Tuesday. We\'ll start at 8 AM.',
        read: false,
      },
      {
        sender: 'client@example.com',
        recipient: 'admin@stewartstriping.com',
        message: 'Perfect! Should we move any vehicles from the lot?',
        read: true,
      },
      {
        sender: 'admin@stewartstriping.com',
        recipient: 'client@example.com',
        message: 'Yes, please clear sections A and B by 7:30 AM. We\'ll work in phases.',
        read: false,
      },
    ],
    skipDuplicates: true,
  })

  // Sample website analytics
  const today = new Date()
  for (let i = 0; i < 30; i++) {
    const date = new Date(today)
    date.setDate(date.getDate() - i)
    
    await prisma.websiteAnalytics.upsert({
      where: { date },
      update: {},
      create: {
        date,
        visitors: Math.floor(Math.random() * 100) + 50,
        pageViews: Math.floor(Math.random() * 200) + 100,
        conversions: Math.floor(Math.random() * 10) + 2,
        bounceRate: Math.round((Math.random() * 30 + 20) * 100) / 100,
      },
    })
  }

  console.log('Sample data created successfully!')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
