'use client'

import { SignIn } from '@clerk/nextjs'

export default function Page() {
	return (
		<div className='min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 via-black to-red-950 p-4'>
			<SignIn
				appearance={{
					variables: {
						colorPrimary: '#dc2626',
						colorBackground: '#000000',
						colorText: '#ffffff',
						colorInputText: '#ffffff',
						colorInputBackground: '#1c1917',
					},
					elements: {
						// Card
						card: 'bg-black/80 backdrop-blur-sm border border-red-900 rounded-2xl shadow-2xl shadow-red-900/30',

						// Header
						headerTitle: 'text-2xl font-bold text-white',
						headerSubtitle: 'text-red-300',

						// Social buttons - OQ YOZUV VA ICON
						socialButtonsBlockButton:
							'bg-red-950 hover:bg-red-900 border-red-800',
						socialButtonsBlockButtonText: 'text-white', // ✅ OQ YOZUV
						socialButtonsProviderIcon: 'brightness-0 invert', // ✅ OQ ICON

						// Form fields
						formFieldLabel: 'text-red-200 font-medium',
						formFieldInput:
							'bg-red-950 border-red-800 text-white placeholder:text-red-400 focus:border-red-600 focus:ring-red-600',

						// Buttons
						formButtonPrimary:
							'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold shadow-lg shadow-red-900/50',

						// Links
						footerActionLink: 'text-red-400 hover:text-red-300 font-medium',

						// Alert
						alert: 'bg-red-900/40 border-red-800',
						alertText: 'text-red-200',
					},
				}}
			/>
		</div>
	)
}
