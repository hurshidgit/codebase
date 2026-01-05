import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'

// Faqat ochiq routelarni aniqlash
const isPublicRoute = createRouteMatcher([
	'/',
	'/sign-in(.*)',
	'/sign-up(.*)',
	'/api/webhooks(.*)',
	'/contact-us',
	'/pricing',
	'/about(.*)',
	'/projects',
	'/courses(.*)', // agar kurslar ro'yxati ochiq bo'lsa
])

export default clerkMiddleware(async (auth, req) => {
	// Agar route public bo'lmasa, auth talab qiladi
	if (!isPublicRoute(req)) {
		await auth.protect()
	}
})

export const config = {
	matcher: [
		'/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
		'/(api|trpc)(.*)',
	],
}
