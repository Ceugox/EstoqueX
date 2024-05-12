import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { Toaster } from './ui/components/toaster'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Admin - Dashboard',
	description: 'Generated by create next app',
}

export default async function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<main>{children}</main>
				<Toaster />
			</body>
		</html>
	)
}
