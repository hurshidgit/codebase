'use client'

import { UserDetailContext } from '@/context/UserDetailContext'
import { useUser } from '@clerk/nextjs'
import axios from 'axios'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import { useEffect, useState } from 'react'

function Provider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	const { user } = useUser()
	const [userDetail, setUserDetail] = useState()
	const CreateNewUser = async () => {
		const result = await axios.post('/api/user', {})
		console.log(result)
		setUserDetail(result?.data)
	}

	useEffect(() => {
		if (user) {
			setTimeout(() => CreateNewUser(), 0)
		}
	}, [user])

	return (
		<NextThemesProvider
			attribute='class'
			defaultTheme='dark'
			enableSystem={false}
			disableTransitionOnChange
			storageKey='codebase-theme'
			{...props}
		>
			<UserDetailContext.Provider
				value={{
					userDetail,
					setUserDetail: setUserDetail as any,
				}}
			>
				{children}
			</UserDetailContext.Provider>
		</NextThemesProvider>
	)
}

export default Provider
