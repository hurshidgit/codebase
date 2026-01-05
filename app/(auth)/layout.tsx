'use client'

import { useEffect } from 'react'

export default function AuthLayout({
	children,
}: {
	children: React.ReactNode
}) {
	useEffect(() => {
		// CAPTCHA uchun div yaratish
		if (!document.getElementById('clerk-captcha')) {
			const div = document.createElement('div')
			div.id = 'clerk-captcha'
			div.className = 'hidden'
			document.body.appendChild(div)
		}
	}, [])

	return <>{children}</>
}
