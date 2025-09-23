'use client'

import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const links = [
    { href: '/', label: 'Home' },
    { href: '/new-scan', label: 'New Scan' },
    { href: '/tumor-details', label: 'Tumor Details' },
    { href: '/model-insights', label: 'Model Insights' },
  ]

  return (
    <header className="w-full sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/brain.svg" alt="Hospital Logo" width={36} height={36} />
          <h1 className="text-xl font-bold text-blue-800">MediScan</h1>
        </div>

        {/* Nav Links */}
        <nav className="flex gap-8 text-sm font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition hover:text-blue-700 ${
                pathname === link.href ? 'text-blue-700 font-semibold' : 'text-gray-700'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
