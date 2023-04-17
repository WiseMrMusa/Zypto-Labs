"use client"
import Header from '@/components/header'

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // <html lang="en">
    // <body className='flex h-full flex-col bg-gray-50'>
    <>
      <Header />
      <main >
        <div>
        {children}
        </div>
      </main>
    </>
    // </body>
    // </html>
  )
}