'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

export default function Provider({ children }: { children: React.ReactNode }) {
	return (
		<NextThemesProvider
			attribute='class'
			defaultTheme='dark'
			enableSystem={false}
			disableTransitionOnChange
			storageKey='codebase-theme'
		>
			{children}
		</NextThemesProvider>
	)
}
