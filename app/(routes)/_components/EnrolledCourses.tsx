import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { useState } from 'react'

function EnrolledCourses() {
	const [enrolledCourses, setEnrolledCourses] = useState([])
	return (
		<div className='mt-8'>
			<h2 className='text-3xl font-game text-center mb-2'>
				Your Enrolled Courses
			</h2>
			{enrolledCourses?.length == 0 ? (
				<div className='flex flex-col items-center gap-3 p-7 border rounded-2xl bg-zinc-900'>
					<Image src='/books.png' alt='Book' width={90} height={90} />
					<h2 className='font-game text-xl'>
						You Don&apos;t have any enrolled courses
					</h2>
					<Button variant={'pixel'} size={'lg'} className='font-game text-lg'>
						Browser All Couses
					</Button>
				</div>
			) : (
				<div>List</div>
			)}
		</div>
	)
}

export default EnrolledCourses
