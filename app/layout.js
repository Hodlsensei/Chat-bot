import './globals.css'

export const metadata = {
  title: 'Lillys Global Visa Assistant - Get Help Before Your Consultation',
  description: 'Get instant answers about visa requirements, documents, and processing times before meeting Mrs. Lillian',
  themeColor: '#25D366',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#25D366" />
      </head>
      <body className="bg-stone-100 min-h-screen">{children}</body>
    </html>
  )
}